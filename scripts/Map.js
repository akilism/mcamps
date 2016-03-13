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
    videos: [],
    poly: [{ lat: 41.12304092432779, lng: 22.50998854637146 },
			{ lat: 41.12268127339883, lng: 22.510133385658264 },
			{ lat: 41.12287120166311, lng: 22.510798573493958 },
			{ lat: 41.12329550750184, lng: 22.511039972305298 },
			{ lat: 41.123343999423, lng: 22.511066794395443 },
			{ lat: 41.123368245370145, lng: 22.51097023487091 },
			{ lat: 41.123372286360464, lng: 22.510862946510315 },
			{ lat: 41.12334804041482, lng: 22.510782480239868 },
			{ lat: 41.12331571247335, lng: 22.510675191879272 },
			{ lat: 41.12324297454677, lng: 22.51047670841217 },
			{ lat: 41.123190441549696, lng: 22.510299682617188 },
			{ lat: 41.12312174449003, lng: 22.510090470314026 },
			{ lat: 41.123077293413104, lng: 22.51001536846161 },
			{ lat: 41.123024760283386, lng: 22.5099778175354 }]
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
    videos: [],
    poly: [{ lat: 51.02126665787293, lng: 2.276144027709961 },
			{ lat: 51.02113168207555, lng: 2.2757041454315186 },
			{ lat: 51.02082798509467, lng: 2.2757041454315186 },
			{ lat: 51.02020033836347, lng: 2.275972366333008 },
			{ lat: 51.01991688221585, lng: 2.276315689086914 },
			{ lat: 51.02001811675323, lng: 2.2778713703155513 },
			{ lat: 51.0202948233609, lng: 2.279287576675415 },
			{ lat: 51.02089547348458, lng: 2.2796738147735596 },
			{ lat: 51.02138813575457, lng: 2.2794485092163086 },
			{ lat: 51.021732321357426, lng: 2.278268337249756 },
			{ lat: 51.02155685450663, lng: 2.2768521308898926 },
			{ lat: 51.02124641152835, lng: 2.2761011123657227 }]
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
    videos: [],
    poly: [{ lat: 50.97402814856588, lng: 1.8814945220947268 },
			{ lat: 50.974217306496, lng: 1.8818914890289304 },
			{ lat: 50.97441321925427, lng: 1.8824708461761477 },
			{ lat: 50.974487530773956, lng: 1.8828141689300537 },
			{ lat: 50.974487530773956, lng: 1.8830502033233643 },
			{ lat: 50.97444024163883, lng: 1.883232593536377 },
			{ lat: 50.97430512955881, lng: 1.8833720684051511 },
			{ lat: 50.974048415523804, lng: 1.8833935260772703 },
			{ lat: 50.97389979096019, lng: 1.8832969665527344 },
			{ lat: 50.97381872281593, lng: 1.8833827972412107 },
			{ lat: 50.97369712033417, lng: 1.8836295604705808 },
			{ lat: 50.97356876181355, lng: 1.883833408355713 },
			{ lat: 50.97341337997183, lng: 1.8840372562408447 },
			{ lat: 50.97312963787593, lng: 1.8844342231750488 },
			{ lat: 50.9729472313274, lng: 1.8846058845520017 },
			{ lat: 50.97274455654437, lng: 1.8848097324371336 },
			{ lat: 50.97254863674667, lng: 1.8850350379943848 },
			{ lat: 50.97240000738332, lng: 1.8851101398468015 },
			{ lat: 50.97214328281714, lng: 1.884927749633789 },
			{ lat: 50.97204194378196, lng: 1.8846166133880613 },
			{ lat: 50.9720622116067, lng: 1.8834471702575686 },
			{ lat: 50.972136526888356, lng: 1.8827068805694582 },
			{ lat: 50.97217706244642, lng: 1.8821489810943601 },
			{ lat: 50.97225137754429, lng: 1.8817198276519773 },
			{ lat: 50.972204086132116, lng: 1.8813872337341309 },
			{ lat: 50.972190574291226, lng: 1.8810546398162842 },
			{ lat: 50.97221084205111, lng: 1.8809258937835691 },
			{ lat: 50.97251485738767, lng: 1.8808400630950928 },
			{ lat: 50.97293371970271, lng: 1.8807005882263181 },
			{ lat: 50.97325124184359, lng: 1.8806898593902586 },
			{ lat: 50.973548494646295, lng: 1.880764961242676 },
			{ lat: 50.97382547850002, lng: 1.8809688091278074 },
			{ lat: 50.974048415523804, lng: 1.881333589553833 },
			{ lat: 50.974298373944485, lng: 1.8817090988159177 },
			{ lat: 50.974433486044155, lng: 1.8820631504058838 },
			{ lat: 50.97446050841692, lng: 1.8824923038482666 }]
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
    videos: [],
    poly: [{ lat: 51.018614311449404, lng: 2.4418455362319946 },
			{ lat: 51.018533321385085, lng: 2.4418723583221436 },
			{ lat: 51.01821273432554, lng: 2.4422800540924072 },
			{ lat: 51.0181047466064, lng: 2.4422103166580196 },
			{ lat: 51.01802375565201, lng: 2.441990375518799 },
			{ lat: 51.017963012343394, lng: 2.4414002895355225 },
			{ lat: 51.01790901822446, lng: 2.4410301446914673 },
			{ lat: 51.01796976160384, lng: 2.4409067630767822 },
			{ lat: 51.01811487046576, lng: 2.4408316612243652 },
			{ lat: 51.01824310582622, lng: 2.44071364402771 },
			{ lat: 51.018351093223124, lng: 2.4405956268310547 },
			{ lat: 51.018448956584315, lng: 2.440692186355591 },
			{ lat: 51.018486077115554, lng: 2.4411481618881226 },
			{ lat: 51.01860081311516, lng: 2.4416685104370117 },
			{ lat: 51.018624435197474, lng: 2.441786527633667 }]
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
    videos: [],
    poly: [{ lat: 39.366462673670235, lng: 26.33144974708557 },
			{ lat: 39.366097713990435, lng: 26.331181526184082 },
			{ lat: 39.365832287570846, lng: 26.33194327354431 },
			{ lat: 39.3666119748077, lng: 26.332415342330933 },
			{ lat: 39.3666451527949, lng: 26.331814527511597 }]
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
    videos: [],
    poly: [{ lat: 46.188736596928734, lng: 20.036970376968384 },
			{ lat: 46.18852120153634, lng: 20.037753582000732 },
			{ lat: 46.188268667932384, lng: 20.038129091262817 },
			{ lat: 46.187986423119725, lng: 20.038150548934937 },
			{ lat: 46.18751106015934, lng: 20.037474632263184 },
			{ lat: 46.18730308757146, lng: 20.037120580673218 },
			{ lat: 46.18747392225492, lng: 20.03669142723083 },
			{ lat: 46.187726459510095, lng: 20.03627300262451 },
			{ lat: 46.187978995605086, lng: 20.036015510559082 },
			{ lat: 46.18836522503559, lng: 20.036391019821167 },
			{ lat: 46.18864746790322, lng: 20.036637783050537 },
			{ lat: 46.18875887916254, lng: 20.036777257919308 }]
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
    videos: [],
    poly: [{ lat: 38.286096563835315, lng: 38.454025983810425 },
			{ lat: 38.285709180685544, lng: 38.45357537269592 },
			{ lat: 38.28518705229948, lng: 38.453747034072876 },
			{ lat: 38.285111259157084, lng: 38.454755544662476 },
			{ lat: 38.28543127410884, lng: 38.455249071121216 },
			{ lat: 38.286029193001255, lng: 38.45549583435058 },
			{ lat: 38.28625656931559, lng: 38.45500230789184 },
			{ lat: 38.28629025463493, lng: 38.45442295074463 },
			{ lat: 38.286222883980656, lng: 38.45414400100708 }]
  }
];

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
    this.tileLayer = null;
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

    this.map.on('click', function(e) {
    	console.log(e.latlng);
		});


    // http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}

    // satellite for zoom view.
    // 'http://khm3.google.com/kh/v=198&x={x}&y={y}&z={z}&s=Galileo ',
    //             { maxZoom: 18,
    //               subdomains:['mt0','mt1','mt2','mt3']
    //             }
    this.tileLayer = L.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", {
      attribution: `&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>`,
      subdomains: "abcd",
      maxZoom: 18
	  });

    this.tileLayer.addTo(this.map);
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
    this.tileLayer.setUrl("http://khm3.google.com/kh/v=198&x={x}&y={y}&z={z}&s=Galileo");

    if(!this.poly) {
    	this.poly = L.polygon(camp.poly, { color: "#c00", fillColor: "#c00" });
    	this.poly.addTo(this.map);
    } else {
    	this.poly.setLatLngs(camp.poly);
    	this.poly.redraw();
    }

    this.map.setView(camp.coords, 17);
    this.setState({ campZoom: true });
  };

  unZoom(evt) {
    evt.preventDefault();
    this.tileLayer.setUrl("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png");
    this.map.fitBounds(this.bounds);
    this.setState({ campZoom: false });
  }

  render() {
    const { camp, campZoom, list, showOrigin } = this.state;
    const origins = this.populationDetails(camp.population.origins, showOrigin);
    const zoomOut = (campZoom) ? (<a href="/" onClick={this.unZoom.bind(this)} className="view-all-camps">View All Camps.</a>) : "";

    return (
      <div className="react-root">
        <div className="map" ref="mapElem"></div>
        <div className="camp-detail">
          <h2 className="camp-name">
            <a href="/" onClick={this.zoomCamp.bind(this, camp)}>{ camp.name }</a>
          </h2>
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
          { zoomOut }
        </div>
        { list }
      </div>
    );
  }
}
