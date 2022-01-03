/**
 * 現実世界になぞらえるとこうです。
 *
 * iteratorパターンのよい例は昔のラジオです。ラジオの視聴者はどこかのチャンネルからスタートして[前]/[次]ボタンでチャンネルを順に切り替えることができます。あるいは、MP3プレイヤーやテレビの[前]/[次]ボタンでチャンネルを順に切り替えるところを想像してもよいでしょう。
 * 言い換えると、ラジオやテレビやMP3プレイヤーは、チャンネルや曲やラジオ局のそれぞれのリストを介して列挙（iterate）するインターフェイスを1つ提供していることになります。
 */

/**
 * わかりやすくまとめるとこうです。
 *
 * iteratorパターンは、背後にある表現を隠したまま、あるオブジェクトの1つ以上の要素にアクセスする手段を提供します。
 */

/**
 * Wikipediaではこうです。
 *
 * オブジェクト指向プログラミングにおけるiteratorパターンは、コンテナ内をiteratorでトラバース（traverse: スキャン）してコンテナの要素にアクセスするデザインパターンである。iteratorパターンはコンテナからアルゴリズムを切り離すが、アルゴリズムがコンテナに特化しなければならない場合は切り離せない。
 */

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
}

const stationList = new StationList();
stationList.addStation(new RadioStation(89));
stationList.addStation(new RadioStation(101));
stationList.addStation(new RadioStation(102));

stationList.stations.forEach((v) => {
  console.log(v.frequency);
});

stationList.removeStation(new RadioStation(101));
