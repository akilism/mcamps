import { default as React, Component } from "react";
import ReactDOM from "react-dom";
import { STATUS } from "./Status";
import { LISTTYPE } from "./ListType";
import { ICONS } from "./Icons";
import { camps } from "./camps";
import R from "ramda";
import moment from "moment";
import d3 from "d3";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {type: null, visible: false, el: null},
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
      marker.on('click', (evt) => {
        this.zoomCamp(camp, null);
      });

      marker.bindPopup(`
        <div class="marker-camp-name">${camp.name}</div>
        <div class="marker-camp-location">${camp.location}</div>
      `);

      marker.on('mouseover', (evt) => {
        evt.target.openPopup();
        this.setState({ camp });
      });

      marker.on('mouseout', (evt) => {
        evt.target.closePopup();
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
    this.map = L.map(this.refs["mapElem"], { scrollWheelZoom: false }).setView([ 50.973325, 1.883172 ], 15);

    this.map.on('click', function(e) {
      console.log(e.latlng);
		});

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

  article(article) {
    const date = moment(article.date, "MM-DD-YYYY").format("dddd, MMMM Do YYYY");

    return (
      <li className="article-item">
        <a className="article-image-link" href={ article.url } title={ article.title }>
          <img className="article-image" src={ article.imageUrl } alt={ article.title } />
        </a>
        <a className="article-title-link" href={ article.url } title={ article.title }>
          <div className="article-title">{ article.title }</div>
          <div className="article-details">
            <div className="article-date">{ date }</div>
            <div className="article-byline">By { article.byLine }</div>
          </div>
        </a>

      </li>
    );
  }

  photo(photo) {
    return (<li><img src={photo.url} alt={photo.caption || photo.title} /></li>);
  }

  video(video) {
  	const date = moment(video.date, "MM-DD-YYYY").format("dddd, MMMM Do YYYY");
    return (
    	<li className="video-item">
        <a className="video-image-link" href={ video.url } title={ video.title }>
          <img className="video-image" src={ video.imageUrl } alt={ video.title } />
          <div className="video-duration">{ video.duration }</div>
        </a>
        <a className="video-title-link" href={ video.url } title={ video.title }>
          <div className="video-title">{ video.title }</div>
          <div className="video-details">
            <div className="video-date">{ date }</div>
            <div className="video-byline">By { video.byLine }</div>
          </div>
        </a>

      </li>
    );
  }

  list(listType, items) {
    if(items.length <= 0) { return ""; }

    switch(listType) {
      case LISTTYPE.ARTICLE:
        const articles = items.map(this.article);
        return (
          <ul className="articles">
            <li className="list-head">Articles</li>
            { articles }
          </ul>
        );
      case LISTTYPE.PHOTO:
        const photos = items.map(this.photo);
        return (
          <ul className="photos">
            <li className="list-head">Photos</li>
            { photos }
          </ul>
        );
      case LISTTYPE.VIDEO:
        const videos = items.map(this.video);
        return (
          <ul className="videos">
            <li className="list-head">Videos</li>
            { videos }
          </ul>
        );
      default:
        return "";
    }
  }

  showList(listType, items, currentType, evt) {
    evt.preventDefault();

    // if(currentType === listType) { this.setState({ list: {type: false, el: null} }); return; }
    let visible = !this.state.list.visible;

    if(currentType !== listType) { visible = true; }

    this.setState({
      list: {
      	el: this.list(listType, items),
        visible: visible,
        type: listType
      }
    });
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
    if(evt) { evt.preventDefault(); }
    this.tileLayer.setUrl("http://khm3.google.com/kh/v=198&x={x}&y={y}&z={z}&s=Galileo");

    if(!this.poly) {
    	this.poly = L.polygon(camp.poly, { color: "#c00", fillColor: "#c00" });
    	this.poly.addTo(this.map);
    } else {
    	this.poly.setLatLngs(camp.poly);
    	this.poly.redraw();
    }

    this.map.setView(camp.coords, 16);
    this.setState({ camp, campZoom: true });
  };

  unZoom(evt) {
    evt.preventDefault();
    this.tileLayer.setUrl("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png");
    this.map.fitBounds(this.bounds);
    this.setState({ campZoom: false, list: "" });
  }

  getItems(listType, camp) {
  	switch(listType) {
  		case LISTTYPE.ARTICLE:
  			return camp.articles;
  		case LISTTYPE.PHOTO:
  			return camp.photos;
  		case LISTTYPE.VIDEO:
  			return camp.videos;
  		default:
  			return [];
  	}
  }

  demographics(types, show) {
  	const visState = (show && types.length > 0) ? "visible" : "hidden";
    const className = `demographics ${visState}`;
    const max = types.reduce((acc, val, idx) => {
    	return (val.total > acc) ? val.total : acc;
    }, 0);
    const scale = d3.scale.linear().domain([0, max]).range([0, 400]);
    const items = types.map((item) => {
    	return (
	  		<li className="population-type" style={{ width: `${scale(item.total)}px` }}>
	  			{ item.name }: { item.total }
	  		</li>
			);
		});

    return (
      <ul className={className}>
        { items }
      </ul>
    );
  }

  render() {
    const { camp, campZoom, list, showOrigin } = this.state;
    const origins = this.populationDetails(camp.population.origins, showOrigin);
    const demographics = this.demographics(camp.population.types, showOrigin);
    const zoomOut = (campZoom) ? (<a href="/" onClick={this.unZoom.bind(this)} className="view-all-camps">View All Camps.</a>) : "";
    const listEl = (list.visible) ? list.el : "";

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
              { demographics }
              { origins }
            </li>
          </ul>
          <ul className="camp-content-lists">
            <li className={(camp.articles.length > 0) ? "" : "hide"}>
              <a href="/"
                onClick={ this.showArticles.bind(this, camp.articles, list.type) }>
                  Articles
              </a>
            </li>
            <li className={(camp.photos.length > 0) ? "" : "hide"}>
              <a href="/"
                onClick={ this.showPhotos.bind(this, camp.photos, list.type) }>
                  Photos
              </a>
            </li>
            <li className={(camp.videos.length > 0) ? "" : "hide"}>
              <a href="/"
                onClick={ this.showVideos.bind(this, camp.videos, list.type) }>
                  Videos
              </a>
            </li>
          </ul>
          { zoomOut }
        </div>
        <div className="content-list">
        	{ listEl }
        </div>
      </div>
    );
  }
}
