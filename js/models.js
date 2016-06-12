var session = {
    subjects : [],
    loadedSubject : 0
}

var Subject = function (dataObject) {
    var data           = localStorage[dataObject.id] ? JSON.parse(localStorage[dataObject.id]) : dataObject;
    this.element       = document.createElement("div");
    this.element.id    = "subject-face";
    this.element.model = this;
    
    this.properties = {
        id      : data.id      || "Unknown ID", 
        name    : data.name    || "Unknown Name",
        markers : data.markers || {},
    };

    this.setEvents().setMarkers();
};

Subject.prototype.loadSubject = function () {
    var subjectElement = document.getElementById("subject-canvas"),
        subjectName = document.getElementById("subject-name");
    subjectName.innerHTML = this.properties.name;
    subjectElement.innerHTML = "";
    subjectElement.appendChild(this.element);

    return this;
};

Subject.prototype.setEvents = function () {
    var thisSubject = this;

    this.element.onclick = function (e) {
        var offset = this.getBoundingClientRect(),
            marker = null,
            markerObject = {
                id   : Date.now(),
                type : "unknown",
                top  : ((e.clientY - offset.top) / offset.height * 100) + "%",
                left : ((e.clientX - offset.left) / offset.width * 100) + "%"
            };
        thisSubject.properties.markers[markerObject.id] = markerObject;
        marker = thisSubject.addMarker(markerObject);
        thisSubject.addMarkerMenu(marker);
    };

    return this;
};

Subject.prototype.setMarkers = function () {
    var markers = this.properties.markers, i;

    this.element.innerHTML = "";
    for (i in markers) {
        this.addMarker(markers[i]);
    }

    return this;
};

Subject.prototype.addMarker = function (markerObject) {
    var data        = markerObject || {},
        thisSubject = this,
        marker      = document.createElement("div");

    marker.id         = data.id;
    marker.className  = "marker";
    marker.style.top  = data.top;
    marker.style.left = data.left;
    marker.setAttribute("type", data.type);
    
    marker.onclick = function (e) {
        thisSubject.addMarkerMenu(marker, thisSubject);
        e.preventDefault();
        e.stopPropagation();
    };

    thisSubject.element.appendChild(marker);
    
    return marker;
};

Subject.prototype.addMarkerMenu = function (marker) {
    if (!marker.children.length) {
        var thisSubject     = this,
            menu            = document.createElement("div"),
            inflammatory    = document.createElement("button"),
            noninflammatory = document.createElement("button"),
            removeMarker    = document.createElement("button"),
            currentMenu     = document.getElementById("marker-menu");

        $$.removeMarkerMenu();
            
        menu.id = "marker-menu";
        menu.model = this;
        menu.marker = marker;

        inflammatory.className = "inflammatory selector";
        inflammatory.onclick   = function () {
            thisSubject.properties.markers[marker.id].type = "inflammatory"; 
            marker.setAttribute("type", "inflammatory");
        };

        noninflammatory.className = "noninflammatory selector";
        noninflammatory.onclick   = function () {
            thisSubject.properties.markers[marker.id].type = "noninflammatory";
            marker.setAttribute("type", "noninflammatory");
        };

        removeMarker.id        = "remove-marker";
        removeMarker.innerHTML = "Remove";
        removeMarker.onclick   = function () {
            thisSubject.removeMarker(marker);
            thisSubject.save();
        };
        
        menu.onclick = function (e) {
            $$.removeMarkerMenu();
            thisSubject.save();
            e.preventDefault();
            e.stopPropagation();
        }

        menu.appendChild(inflammatory);
        menu.appendChild(noninflammatory);
        menu.appendChild(removeMarker);
        marker.appendChild(menu);
    }
};

Subject.prototype.removeMarker = function (marker) {
    if (marker === "all") {
        var markers = this.properties.markers, i;
        for (i in markers) {
            this.removeMarker(document.getElementById(i));
        }
    } else if (marker != null) {
        delete this.properties.markers[marker.id];
        if (this.element.contains(marker)) {
            this.element.removeChild(marker);
        }
    }
};

Subject.prototype.save = function () {
    localStorage[this.properties.id] = JSON.stringify(this.properties);
};