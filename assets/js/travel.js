var map = AmCharts.makeChart("map-countries", {
    type: "map",
    theme: "light",
    projection: "eckert5",
    panEventsEnabled: true,
    backgroundColor: "#535364",
    backgroundAlpha: 0,
    zoomControl: {
        zoomControlEnabled: true
    },
    dataProvider: {
        map: "worldHigh",
        getAreasFromMap: true,
        areas:
            [
                {
                    "id": "AT",
                    "showAsSelected": false
                },
                {
                    "id": "LI",
                    "showAsSelected": false
                },
                {
                    "id": "BE",
                    "showAsSelected": true
                },
                {
                    "id": "CZ",
                    "showAsSelected": false
                },
                {
                    "id": "FR",
                    "showAsSelected": true
                },
                {
                    "id": "DE",
                    "showAsSelected": false
                },
                {
                    "id": "IS",
                    "showAsSelected": false
                },
                {
                    "id": "IT",
                    "showAsSelected": false
                },
                {
                    "id": "NL",
                    "showAsSelected": false
                },
                {
                    "id": "ES",
                    "showAsSelected": false
                },
                {
                    "id": "CH",
                    "showAsSelected": false
                },
                {
                    "id": "TR",
                    "showAsSelected": false
                },
                {
                    "id": "GB",
                    "showAsSelected": false
                },
                {
                    "id": "VA",
                    "showAsSelected": false
                },
                {
                    "id": "US",
                    "showAsSelected": true
                },
                {
                    "id": "BD",
                    "showAsSelected": false
                },
                {
                    "id": "PK",
                    "showAsSelected": false
                },
                {
                    "id": "SA",
                    "showAsSelected": false
                },
                {
                    "id": "AE",
                    "showAsSelected": false
                }
            ]
    },
    areasSettings: {
        autoZoom: true,
        color: "#B4B4B7",
        colorSolid: "#84ADE9",
        selectedColor: "#84ADE9",
        outlineColor: "#666666",
        rollOverColor: "#9EC2F7",
        rollOverOutlineColor: "#000000"
    }
})

var map = AmCharts.makeChart("map-states", {
    type: "map",
    theme: "light",
    panEventsEnabled: true,
    backgroundColor: "#535364",
    backgroundAlpha: 0,
    zoomControl: {
        zoomControlEnabled: true
    },
    dataProvider: {
        map: "usaHigh",
        getAreasFromMap: true,
        areas:
            [
                {
                    "id": "US-AL",
                    "showAsSelected": false
                },
                {
                    "id": "US-IN",
                    "showAsSelected": true
                },
                {
                    "id": "US-CA",
                    "showAsSelected": true
                },
                {
                    "id": "US-CT",
                    "showAsSelected": true
                },
                {
                    "id": "US-DC",
                    "showAsSelected": true
                },
                {
                    "id": "US-FL",
                    "showAsSelected": true
                },
                {
                    "id": "US-GA",
                    "showAsSelected": true
                },
                {
                    "id": "US-IL",
                    "showAsSelected": true
                },
                {
                    "id": "US-KY",
                    "showAsSelected": true
                },
                {
                    "id": "US-LA",
                    "showAsSelected": true
                },
                {
                    "id": "US-MA",
                    "showAsSelected": true
                },
                {
                    "id": "US-ME",
                    "showAsSelected": true
                },
                {
                    "id": "US-MI",
                    "showAsSelected": true
                },
                {
                    "id": "US-MO",
                    "showAsSelected": true
                },
                {
                    "id": "US-NC",
                    "showAsSelected": true
                },
                {
                    "id": "US-NH",
                    "showAsSelected": true
                },
                {
                    "id": "US-NJ",
                    "showAsSelected": true
                },
                {
                    "id": "US-NV",
                    "showAsSelected": true
                },
                {
                    "id": "US-NY",
                    "showAsSelected": true
                },
                {
                    "id": "US-PA",
                    "showAsSelected": true
                },
                {
                    "id": "US-RI",
                    "showAsSelected": true
                },
                {
                    "id": "US-SC",
                    "showAsSelected": true
                },
                {
                    "id": "US-TN",
                    "showAsSelected": true
                },
                {
                    "id": "US-TX",
                    "showAsSelected": true
                },
                {
                    "id": "US-VA",
                    "showAsSelected": true
                },
                {
                    "id": "US-WA",
                    "showAsSelected": true
                }
            ]
    },
    areasSettings: {
        autoZoom: true,
        color: "#B4B4B7",
        colorSolid: "#84ADE9",
        selectedColor: "#84ADE9",
        outlineColor: "#666666",
        rollOverColor: "#9EC2F7",
        rollOverOutlineColor: "#000000"
    }
})
