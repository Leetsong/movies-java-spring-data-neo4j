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
  },

  "GET /graph": {
    "links": [{
      "source": 1,
      "target": 0
    }, {
      "source": 2,
      "target": 0
    }, {
      "source": 3,
      "target": 0
    }, {
      "source": 4,
      "target": 0
    }, {
      "source": 5,
      "target": 0
    }, {
      "source": 1,
      "target": 6
    }, {
      "source": 2,
      "target": 6
    }, {
      "source": 3,
      "target": 6
    }, {
      "source": 4,
      "target": 6
    }, {
      "source": 1,
      "target": 7
    }, {
      "source": 2,
      "target": 7
    }, {
      "source": 3,
      "target": 7
    }, {
      "source": 4,
      "target": 7
    }, {
      "source": 9,
      "target": 8
    }, {
      "source": 2,
      "target": 8
    }, {
      "source": 10,
      "target": 8
    }, {
      "source": 12,
      "target": 11
    }, {
      "source": 2,
      "target": 11
    }, {
      "source": 2,
      "target": 13
    }, {
      "source": 2,
      "target": 14
    }, {
      "source": 4,
      "target": 15
    }, {
      "source": 4,
      "target": 16
    }, {
      "source": 18,
      "target": 17
    }, {
      "source": 9,
      "target": 17
    }, {
      "source": 20,
      "target": 19
    }, {
      "source": 21,
      "target": 19
    }, {
      "source": 22,
      "target": 19
    }, {
      "source": 23,
      "target": 19
    }, {
      "source": 24,
      "target": 19
    }, {
      "source": 25,
      "target": 19
    }, {
      "source": 27,
      "target": 26
    }, {
      "source": 21,
      "target": 26
    }, {
      "source": 28,
      "target": 26
    }, {
      "source": 29,
      "target": 26
    }, {
      "source": 30,
      "target": 26
    }, {
      "source": 31,
      "target": 26
    }, {
      "source": 32,
      "target": 26
    }, {
      "source": 33,
      "target": 26
    }, {
      "source": 34,
      "target": 26
    }, {
      "source": 12,
      "target": 35
    }, {
      "source": 21,
      "target": 35
    }, {
      "source": 36,
      "target": 35
    }, {
      "source": 37,
      "target": 35
    }, {
      "source": 38,
      "target": 35
    }, {
      "source": 39,
      "target": 35
    }, {
      "source": 27,
      "target": 35
    }, {
      "source": 40,
      "target": 35
    }, {
      "source": 41,
      "target": 35
    }, {
      "source": 42,
      "target": 35
    }, {
      "source": 43,
      "target": 35
    }, {
      "source": 44,
      "target": 35
    }, {
      "source": 27,
      "target": 45
    }, {
      "source": 12,
      "target": 45
    }, {
      "source": 46,
      "target": 45
    }, {
      "source": 47,
      "target": 45
    }, {
      "source": 12,
      "target": 48
    }, {
      "source": 41,
      "target": 49
    }, {
      "source": 12,
      "target": 49
    }, {
      "source": 37,
      "target": 50
    }, {
      "source": 18,
      "target": 51
    }, {
      "source": 37,
      "target": 51
    }, {
      "source": 30,
      "target": 52
    }, {
      "source": 38,
      "target": 52
    }, {
      "source": 53,
      "target": 52
    }, {
      "source": 54,
      "target": 52
    }, {
      "source": 55,
      "target": 52
    }, {
      "source": 56,
      "target": 52
    }, {
      "source": 57,
      "target": 52
    }, {
      "source": 59,
      "target": 58
    }, {
      "source": 27,
      "target": 58
    }, {
      "source": 60,
      "target": 58
    }, {
      "source": 61,
      "target": 58
    }, {
      "source": 62,
      "target": 58
    }, {
      "source": 47,
      "target": 63
    }, {
      "source": 25,
      "target": 63
    }, {
      "source": 64,
      "target": 63
    }, {
      "source": 65,
      "target": 63
    }, {
      "source": 66,
      "target": 63
    }, {
      "source": 18,
      "target": 63
    }, {
      "source": 18,
      "target": 67
    }, {
      "source": 25,
      "target": 67
    }, {
      "source": 18,
      "target": 68
    }, {
      "source": 25,
      "target": 68
    }, {
      "source": 25,
      "target": 69
    }, {
      "source": 71,
      "target": 70
    }, {
      "source": 32,
      "target": 70
    }, {
      "source": 18,
      "target": 70
    }, {
      "source": 66,
      "target": 72
    }, {
      "source": 57,
      "target": 72
    }, {
      "source": 18,
      "target": 73
    }, {
      "source": 46,
      "target": 73
    }, {
      "source": 46,
      "target": 74
    }, {
      "source": 76,
      "target": 75
    }, {
      "source": 60,
      "target": 75
    }, {
      "source": 77,
      "target": 75
    }, {
      "source": 71,
      "target": 75
    }, {
      "source": 62,
      "target": 78
    }, {
      "source": 62,
      "target": 79
    }, {
      "source": 77,
      "target": 80
    }, {
      "source": 18,
      "target": 81
    }],
    "nodes": [{
      "title": "The Matrix",
      "label": "movie"
    }, {
      "title": "Carrie-Anne Moss",
      "label": "actor"
    }, {
      "title": "Keanu Reeves",
      "label": "actor"
    }, {
      "title": "Laurence Fishburne",
      "label": "actor"
    }, {
      "title": "Hugo Weaving",
      "label": "actor"
    }, {
      "title": "Emil Eifrem",
      "label": "actor"
    }, {
      "title": "The Matrix Reloaded",
      "label": "movie"
    }, {
      "title": "The Matrix Revolutions",
      "label": "movie"
    }, {
      "title": "The Devil's Advocate",
      "label": "movie"
    }, {
      "title": "Charlize Theron",
      "label": "actor"
    }, {
      "title": "Al Pacino",
      "label": "actor"
    }, {
      "title": "Something's Gotta Give",
      "label": "movie"
    }, {
      "title": "Jack Nicholson",
      "label": "actor"
    }, {
      "title": "Johnny Mnemonic",
      "label": "movie"
    }, {
      "title": "The Replacements",
      "label": "movie"
    }, {
      "title": "V for Vendetta",
      "label": "movie"
    }, {
      "title": "Cloud Atlas",
      "label": "movie"
    }, {
      "title": "That Thing You Do",
      "label": "movie"
    }, {
      "title": "Tom Hanks",
      "label": "actor"
    }, {
      "title": "Top Gun",
      "label": "movie"
    }, {
      "title": "Kelly McGillis",
      "label": "actor"
    }, {
      "title": "Tom Cruise",
      "label": "actor"
    }, {
      "title": "Val Kilmer",
      "label": "actor"
    }, {
      "title": "Anthony Edwards",
      "label": "actor"
    }, {
      "title": "Tom Skerritt",
      "label": "actor"
    }, {
      "title": "Meg Ryan",
      "label": "actor"
    }, {
      "title": "Jerry Maguire",
      "label": "movie"
    }, {
      "title": "Cuba Gooding Jr.",
      "label": "actor"
    }, {
      "title": "Renee Zellweger",
      "label": "actor"
    }, {
      "title": "Kelly Preston",
      "label": "actor"
    }, {
      "title": "Jerry O'Connell",
      "label": "actor"
    }, {
      "title": "Jay Mohr",
      "label": "actor"
    }, {
      "title": "Bonnie Hunt",
      "label": "actor"
    }, {
      "title": "Regina King",
      "label": "actor"
    }, {
      "title": "Jonathan Lipnicki",
      "label": "actor"
    }, {
      "title": "A Few Good Men",
      "label": "movie"
    }, {
      "title": "Demi Moore",
      "label": "actor"
    }, {
      "title": "Kevin Bacon",
      "label": "actor"
    }, {
      "title": "Kiefer Sutherland",
      "label": "actor"
    }, {
      "title": "Noah Wyle",
      "label": "actor"
    }, {
      "title": "Kevin Pollak",
      "label": "actor"
    }, {
      "title": "J.T. Walsh",
      "label": "actor"
    }, {
      "title": "James Marshall",
      "label": "actor"
    }, {
      "title": "Christopher Guest",
      "label": "actor"
    }, {
      "title": "Aaron Sorkin",
      "label": "actor"
    }, {
      "title": "As Good as It Gets",
      "label": "movie"
    }, {
      "title": "Helen Hunt",
      "label": "actor"
    }, {
      "title": "Greg Kinnear",
      "label": "actor"
    }, {
      "title": "One Flew Over the Cuckoo's Nest",
      "label": "movie"
    }, {
      "title": "Hoffa",
      "label": "movie"
    }, {
      "title": "Frost/Nixon",
      "label": "movie"
    }, {
      "title": "Apollo 13",
      "label": "movie"
    }, {
      "title": "Stand By Me",
      "label": "movie"
    }, {
      "title": "River Phoenix",
      "label": "actor"
    }, {
      "title": "Corey Feldman",
      "label": "actor"
    }, {
      "title": "Wil Wheaton",
      "label": "actor"
    }, {
      "title": "John Cusack",
      "label": "actor"
    }, {
      "title": "Marshall Bell",
      "label": "actor"
    }, {
      "title": "What Dreams May Come",
      "label": "movie"
    }, {
      "title": "Annabella Sciorra",
      "label": "actor"
    }, {
      "title": "Max von Sydow",
      "label": "actor"
    }, {
      "title": "Werner Herzog",
      "label": "actor"
    }, {
      "title": "Robin Williams",
      "label": "actor"
    }, {
      "title": "You've Got Mail",
      "label": "movie"
    }, {
      "title": "Parker Posey",
      "label": "actor"
    }, {
      "title": "Dave Chappelle",
      "label": "actor"
    }, {
      "title": "Steve Zahn",
      "label": "actor"
    }, {
      "title": "Sleepless in Seattle",
      "label": "movie"
    }, {
      "title": "Joe Versus the Volcano",
      "label": "movie"
    }, {
      "title": "When Harry Met Sally",
      "label": "movie"
    }, {
      "title": "The Green Mile",
      "label": "movie"
    }, {
      "title": "James Cromwell",
      "label": "actor"
    }, {
      "title": "RescueDawn",
      "label": "movie"
    }, {
      "title": "Cast Away",
      "label": "movie"
    }, {
      "title": "Twister",
      "label": "movie"
    }, {
      "title": "Snow Falling on Cedars",
      "label": "movie"
    }, {
      "title": "Ethan Hawke",
      "label": "actor"
    }, {
      "title": "Rick Yune",
      "label": "actor"
    }, {
      "title": "Bicentennial Man",
      "label": "movie"
    }, {
      "title": "The Birdcage",
      "label": "movie"
    }, {
      "title": "Ninja Assassin",
      "label": "movie"
    }, {
      "title": "Charlie Wilson's War",
      "label": "movie"
    }]
  }
}
