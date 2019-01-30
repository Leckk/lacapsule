console.log("hola")
var mymap = L.map('worldmap', 
        {
        center: [48.866667, 2.333333],
        zoom: 13
        }
        );

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

var customIcon = L.icon({
    iconUrl: '/images/location-pin.png',

    iconSize:     [38, 38], 
    shadowSize:   [50, 64], 

    iconAnchor:   [20, 38], 
    shadowAnchor: [4, 62],  

    popupAnchor:  [-3, -76]
});
L.marker([48.858370, 2.294481], {icon: customIcon}).addTo(mymap);
var circle = L.circle(
    [48.858370, 2.294481], 
    {
        color: 'green',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: 500
        }
    ).addTo(mymap);
