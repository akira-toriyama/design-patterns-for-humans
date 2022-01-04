class RadioStation {
  constructor(private _frequency: number) {}

  get frequency() {
    return this._frequency;
  }
}

class StationList {
  stations: RadioStation[] = [];

  addStation(station: RadioStation) {
    this.stations.push(station);
  }

  removeStation(station: RadioStation) {
    const newStations = this.stations.filter(
      (v) => v.frequency !== station.frequency
    );
    this.stations = newStations;
  }

  putStations() {
    this.stations.forEach((v) => {
      console.log(v.frequency);
    });
  }
}

const stationList = new StationList();
stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));

stationList.putStations();

stationList.removeStation(new RadioStation(101));
