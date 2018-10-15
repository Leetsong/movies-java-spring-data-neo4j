import React from 'react';
import G6 from '@antv/g6';
import "@antv/g6/plugins";
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceX,
  forceY,
  forceCollide
} from 'd3';
import PropTypes from 'prop-types';

const NODE_COLOR_MAP = {
  'actor': '#888',
  'watch': '#BBB'
};

const Mapper = G6.Plugins['tool.d3.mapper'];

export default class Graph extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object
  };

  static defaultProps = {
    width: 800,
    height: 800,
    style: null
  };

  graph = null;
  simulation = null;
  subject = null;
  
  handleMouseDown = ev => {
    if (ev.domEvent.button === 0) {
      this.subject = this.simulation.find(ev.x, ev.y);
    }
  };

  handleDragStart = ev => {
    this.subject && this.simulation.alphaTarget(0.3).restart();
  };

  handleDrag = ev => {
    if (this.subject) {
      this.subject.fx = ev.x;
      this.subject.fy = ev.y;
    }
  };

  resetState = () => {
    if (this.subject) {
      this.simulation.alphaTarget(0);
      this.subject.fx = null;
      this.subject.fy = null;
      this.subject = null;
    }
  };

  handleNodeMouseEnter = ev => {
    let item = ev.item;
    this.graph.toFront(item);
    item.getLabel().show();
    this.graph.draw();
  }

  handleNodeMouseLeave = ev => {
    let item = ev.item;
    this.tryHideLabel(item);
  }

  tryHideLabel = node => {
    let model = node.getModel();
    let label = node.getLabel();
    let labelBox = label.getBBox();
    if (labelBox.maxX - labelBox.minX > model.size) {
      label.hide();
      this.graph.draw();
    }
  }

  componentDidMount() {
    let nodeSizeMapper = new Mapper('node', 'degree', 
      'size', [0, 10], {legendCfg: null });
    let nodeColorMapper = new Mapper('node', 'label', 
      'color', [NODE_COLOR_MAP['actor'], NODE_COLOR_MAP['watch']]);

    this.graph = new G6.Graph({
      container: 'mountNode',
      width: this.props.width,
      height: this.props.height,
      plugins: [ nodeSizeMapper, nodeColorMapper ],
      modes: { default: [ 'rightPanCanvas' ]},
      layout: (nodes, edges) => {
        if (this.simulation) {
          this.simulation.alphaTarget(0.3).restart();
        } else {
          this.simulation = forceSimulation(nodes)
            .force('charge', forceManyBody().strength(-100))
            .force('link', forceLink(edges).id(model => model.id))
            .force('collision', forceCollide().radius(model => model.size / 2 * 1.2))
            .force('y', forceY())
            .force('x', forceX())
            .on('tick', () => this.graph.updateNodePosition());
        }
      }
    });

    // set node style
    this.graph.node({
      style: model => ({
        stroke: '#222',
        strokeWidth: '1.5px',
        fill: NODE_COLOR_MAP[model.label]
      }),
      label: model => ({
        text: model.title,
        stroke: '#b3b3b3',
        lineWidth: 2
      })
    });

    // set edge style
    this.graph.edge({
      style: () => ({
        stroke: '#999',
        strokeOpacity: 0.6,
        strokeWidth: '1px'
      })
    });

    // load data
    this.graph.read(this.props.data);

    // move to center
    this.graph.translate(this.graph.getWidth() / 2, this.graph.getHeight() / 2);

    // set events
    this.graph.on('mousedown', this.handleMouseDown);
    this.graph.on('dragstart', this.handleDragStart);
    this.graph.on('drag', this.handleDrag);
    this.graph.on('mouseup', this.resetState);
    this.graph.on('canvas:mouseleave', this.resetState);
    this.graph.on('node:mouseenter', this.handleNodeMouseEnter);
    this.graph.on('node:mouseleave', this.handleNodeMouseLeave);

    // hide edge capturing & hide node label
    this.graph.getEdges().forEach(e => e.getGraphicGroup().set('capture', false));
    this.graph.getNodes().forEach(this.tryHideLabel);
  }

  render() {
    const { style } = this.props;
    return (
      <div>
        <div id="mountNode" style={style} />
      </div>
    );
  }
}
