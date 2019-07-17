import map from './map';
import points from './points';

document.addEventListener('DOMContentLoaded', () => {
  let width = 500;
  let height = 500;
  let location = d3.geo.albersUsa()
                   .translate([width/2, height/2])
  let path = d3.geoPath().projection(location);
  map(width, height, location, path).then(() => {
    points(location, path);
  });
});