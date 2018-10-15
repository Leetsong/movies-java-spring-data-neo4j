export default {
  'GET /persons/*': {
    "name": "Hugo Weaving",
    "born": 1960,
    "_links": {
      "self": {
        "href": "http://localhost:8000/persons/3671006"
      },
      "person": {
        "href": "http://localhost:8000/persons/3671006"
      },
      "movies": {
        "href": "http://localhost:8000/persons/3671006/movies"
      }
    }
  },

  'GET /movies/search/findByTitle': {
    "title": "The Matrix Reloaded",
    "released": 2003,
    "tagline": "Free your mind",
    "roles": [{
      "roles": ["Agent Smith"],
      "_links": {
        "person": {
          "href": "http://localhost:8000/persons/3671006"
        },
        "movie": {
          "href": "http://localhost:8000/movies/3671011"
        }
      }
    }, {
      "roles": ["Morpheus"],
      "_links": {
        "person": {
          "href": "http://localhost:8000/persons/3671005"
        },
        "movie": {
          "href": "http://localhost:8000/movies/3671011"
        }
      }
    }, {
      "roles": ["Trinity"],
      "_links": {
        "person": {
          "href": "http://localhost:8000/persons/3671004"
        },
        "movie": {
          "href": "http://localhost:8000/movies/3671011"
        }
      }
    }, {
      "roles": ["Neo"],
      "_links": {
        "person": {
          "href": "http://localhost:8000/persons/3671003"
        },
        "movie": {
          "href": "http://localhost:8000/movies/3671011"
        }
      }
    }],
    "_links": {
      "self": {
        "href": "http://localhost:8000/movies/3671011"
      },
      "movie": {
        "href": "http://localhost:8000/movies/3671011"
      }
    }
  },

  'GET /movies/search/findByTitleLike': {
    "_embedded": {
      "movies": [{
        "title": "The Matrix",
        "released": 1999,
        "tagline": "Welcome to the Real World",
        "roles": [{
          "roles": ["Trinity"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671004"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671002"
            }
          }
        }, {
          "roles": ["Morpheus"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671005"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671002"
            }
          }
        }, {
          "roles": ["Agent Smith"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671006"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671002"
            }
          }
        }, {
          "roles": ["Neo"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671003"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671002"
            }
          }
        }, {
          "roles": ["Emil"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671010"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671002"
            }
          }
        }],
        "_links": {
          "self": {
            "href": "http://localhost:8000/movies/3671002"
          },
          "movie": {
            "href": "http://localhost:8000/movies/3671002"
          }
        }
      }, {
        "title": "The Matrix Reloaded",
        "released": 2003,
        "tagline": "Free your mind",
        "roles": [{
          "roles": ["Agent Smith"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671006"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671011"
            }
          }
        }, {
          "roles": ["Morpheus"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671005"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671011"
            }
          }
        }, {
          "roles": ["Trinity"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671004"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671011"
            }
          }
        }, {
          "roles": ["Neo"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671003"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671011"
            }
          }
        }],
        "_links": {
          "self": {
            "href": "http://localhost:8000/movies/3671011"
          },
          "movie": {
            "href": "http://localhost:8000/movies/3671011"
          }
        }
      }, {
        "title": "The Matrix Revolutions",
        "released": 2003,
        "tagline": "Everything that has a beginning has an end",
        "roles": [{
          "roles": ["Agent Smith"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671006"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671012"
            }
          }
        }, {
          "roles": ["Morpheus"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671005"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671012"
            }
          }
        }, {
          "roles": ["Trinity"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671004"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671012"
            }
          }
        }, {
          "roles": ["Neo"],
          "_links": {
            "person": {
              "href": "http://localhost:8000/persons/3671003"
            },
            "movie": {
              "href": "http://localhost:8000/movies/3671012"
            }
          }
        }],
        "_links": {
          "self": {
            "href": "http://localhost:8000/movies/3671012"
          },
          "movie": {
            "href": "http://localhost:8000/movies/3671012"
          }
        }
      }]
    },
    "_links": {
      "self": {
        "href": "http://localhost:8000/movies/search/findByTitleLike?title=*Matrix*"
      }
    }
  }
}
