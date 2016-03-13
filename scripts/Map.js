import { default as React, Component } from "react";
import ReactDOM from "react-dom";
import { STATUS } from "./Status";
import { LISTTYPE } from "./ListType";
import { ICONS } from "./Icons";
import R from "ramda";

const camps = [
  {
    name: "Idomeni Camp",
    coords: { lat: 41.122852, lng: 22.510357},
    location: "Idomeni, Kilkis, Greece",
    status: STATUS.ACTIVE,
    managedBy: "Greek Government",
    population: {
      total: 4000,
      origins: [{
        name: 'Afganistan',
        total: 1500,
        distance: 4300
      },
      {
        name: 'Iraq',
        total: 500,
        distance: 2300
      },
      {
        name: 'Syria',
        total: 2000,
        distance: 1890
      }]
    },
    articles: [],
    photos: [],
    videos: []
  },
  {
    name: "Dunkirk",
    coords: { lat: 51.020599, lng: 2.277731},
    location: "Grande-Synthe, Dunkirk, France",
    status: STATUS.ACTIVE,
    managedBy: "???",
    population: {
      total: 10000,
      origins: [{
        name: 'Afganistan',
        total: 4000,
        distance: 10300
      },
      {
        name: 'Iraq',
        total: 1500,
        distance: 6300
      },
      {
        name: 'Syria',
        total: 5500,
        distance: 5890
      }]
    },
    articles: [],
    photos: [],
    videos: []
  },
  {
    name: "Calais Jungle",
    coords: { lat: 50.973325, lng: 1.883172},
    location: "Calais, France",
    status: STATUS.CLOSED,
    managedBy: "NA",
    population: {
      total: 0,
      origins: []
    },
    articles: [],
    photos: [],
    videos: []
  },
  {
    name: "Teteghem",
    coords: { lat: 51.018207, lng: 2.441253},
    location: "Teteghem, France",
    status: STATUS.CLOSED,
    managedBy: "Smugglers",
    population: {
      total: 0,
      origins: []
    },
    articles: [],
    photos: [],
    videos: []
  },
  {
    name: "Lesbos",
    coords: { lat: 39.366044, lng: 26.331947},
    location: "Mantamados, Lesbos, Greece",
    status: STATUS.ACTIVE,
    managedBy: "",
    population: {
      total: 6000,
      origins: [{
        name: 'Afganistan',
        total: 1500,
        distance: 4700
      },
      {
        name: 'Iraq',
        total: 1500,
        distance: 2600
      },
      {
        name: 'Syria',
        total: 3000,
        distance: 2090
      }]
    },
    articles: [],
    photos: [],
    videos: []
  },
  {
    name: "Roszke",
    coords: { lat: 46.187727, lng: 20.036964},
    location: "Roszke, Hungary",
    status: STATUS.ACTIVE,
    managedBy: "Hungarian Government",
    population: {
      total: 3200,
      origins: [{
        name: 'Afganistan',
        total: 1500,
        distance: 5300
      },
      {
        name: 'Iraq',
        total: 500,
        distance: 3300
      },
      {
        name: 'Syria',
        total: 2000,
        distance: 2890
      }]
    },
    articles: [],
    photos: [],
    videos: []
  },
  {
    name: "Beydagi",
    coords: { lat: 38.2856679, lng: 38.4544692},
    location: "Beydagi, Turkey",
    status: STATUS.ACTIVE,
    managedBy: "UNCF",
    population: {
      total: 10000,
      origins: [{
        name: 'Afganistan',
        total: 1000,
        distance: 2300
      },
      {
        name: 'Iraq',
        total: 3000,
        distance: 900
      },
      {
        name: 'Syria',
        total: 6000,
        distance: 790
      }]
    },
    articles: [],
    photos: [],
    videos: []
  }
]

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      camp: camps[0],
      campZoom: false,
      showOrigin: false
    };
    this.map = null;
    this.bounds = null;
    this.showArticles = R.partial(this.showList, [ LISTTYPE.ARTICLE ]);
    this.showPhotos = R.partial(this.showList, [ LISTTYPE.PHOTO ]);
    this.showVideos = R.partial(this.showList, [ LISTTYPE.VIDEO ]);
  }

  addCamps(camps, LMap) {
    const markers = camps.map((camp) => {
      const marker = L.marker(camp.coords, this.markerOptions(camp));
      marker.on('click', () => {
        this.setState({ camp });
      });
      return marker;
    });

    this.bounds = L.latLngBounds(camps.map((camp) => { return camp.coords; }));

    markers.forEach((marker) => {
      marker.addTo(LMap);
    });

    LMap.fitBounds(this.bounds);
  }

  markerOptions(camp) {
    return {
      title: camp.name,
      alt: camp.name,
      // icon: (camp.status) ? ICONS[camp.status] : L.Icon.Default()
    };
  }

  componentDidMount() {
    this.map = L.map(this.refs["mapElem"]).setView([ 50.973325, 1.883172 ], 15);

    // http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}
    L.tileLayer('http://khm3.google.com/kh/v=198&x={x}&y={y}&z={z}&s=Galileo ',
                { maxZoom: 18,
                  subdomains:['mt0','mt1','mt2','mt3']
                })
      .addTo(this.map);

      this.addCamps(camps, this.map);
  }

  campStatus(status) {
    switch(status) {
      case STATUS.ACTIVE:
        return (<span className="status-active">Active</span>);
      case STATUS.CLOSED:
        return (<span className="status-closed">Closed</span>);
      case STATUS.UNKNOWN:
        return (<span className="status-unknown">Unknown</span>);
      default:
        return "";
    }
  }

  article(data) {
    return (<li></li>);
  }

  photo(data) {
    return (<li></li>);
  }

  video(data) {
    return (<li></li>);
  }

  list(listType, items) {
    if(items.length <= 0) { return ""; }

    switch(listType) {
      case LISTTYPE.ARTICLE:
        const articles = items.map(this.article);
        return (
          <ul>
            <li className="list-head">Articles</li>
            { articles }
          </ul>
        );
      case LISTTYPE.PHOTO:
        const photos = items.map(this.photo);
        return (
          <ul>
            <li className="list-head">Photos</li>
            { photos }
          </ul>
        );
      case LISTTYPE.VIDEO:
        const videos = items.map(this.video);
        return (
          <ul>
            <li className="list-head">Videos</li>
            { videos }
          </ul>
        );
      default:
        return "";
    }
  }

  showList(listType, items, evt) {
    evt.preventDefault();
    const listEl = (
      <div className="content-list">
        { this.list(listType, items) }
      </div>
    );
    this.setState({ list: listEl });
  }

  origin(origin) {
    return (
      <li className="origin">
        <ul>
          <li className="origin-country">
            <label>Country of Origin:</label> { origin.name }
          </li>
          <li className="origin-distance">
            <label>Distance to Camp:</label> { origin.distance }km
          </li>
          <li className="origin-total">
            <label>Population in Camp:</label> { origin.total }
          </li>
        </ul>
      </li>
    );
  }

  populationDetails(origins, show) {
    const visState = (show && origins.length > 0) ? "visible" : "hidden";
    const className = `origins ${visState}`;

    return (
      <ul className={className}>
        <li className="origins-header">Origins</li>
        { origins.map(this.origin) }
      </ul>
    );
  }

  toggleOrigins(evt) {
    evt.preventDefault();
    this.setState({ showOrigin: !this.state.showOrigin });
  }

  zoomCamp(camp, evt) {
    evt.preventDefault();
    console.log(camp.coords);
    this.map.setView(camp.coords, 17);
    this.setState({ campZoom: true });
  };

  unZoom(evt) {
    evt.preventDefault();
    console.log(this.bounds);
    this.map.fitBounds(this.bounds);
    this.setState({ campZoom: false });
  }

  render() {
    const { camp, campZoom, list, showOrigin } = this.state;
    const origins = this.populationDetails(camp.population.origins, showOrigin);
    const zoomOut = (campZoom) ? (<a href="/" onClick={this.unZoom.bind(this)}>View All Camps.</a>) : "";

    return (
      <div className="react-root">
        <div className="map" ref="mapElem"></div>
        <div className="camp-detail">
          <h2 className="camp-name">
            <a href="/" onClick={this.zoomCamp.bind(this, camp)}>{ camp.name }</a>
          </h2>
          { zoomOut }
          <ul className="camp-info-items">
            <li className="camp-status">{ camp.location }</li>
            <li className="camp-status"><label>Status:</label> { this.campStatus(camp.status) }</li>
            <li className="camp-status"><label>Managed By:</label> { camp.managedBy }</li>
            <li className="camp-population">
              <a href="/" onClick={ this.toggleOrigins.bind(this) }>
                <label>Population:</label> { camp.population.total }
              </a>
              { origins }
            </li>
          </ul>
          <ul className="camp-content-lists">
            <li>
              <a href="/"
                onClick={ this.showArticles.bind(this, camp.articles) }>
                  Articles
              </a>
            </li>
            <li>
              <a href="/"
                onClick={ this.showPhotos.bind(this, camp.photos) }>
                  Photos
              </a>
            </li>
            <li>
              <a href="/"
                onClick={ this.showVideos.bind(this, camp.videos) }>
                  Videos
              </a>
            </li>
          </ul>
        </div>
        { list }
      </div>
    );
  }
}
