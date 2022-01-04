## 現実世界になぞらえるとこうです。

simple factory のドアのたとえをもう少し広げて考えてみましょう。木製ドアは木製ドア専門店、鉄製ドアは鉄専門店、塩ビドアはそれ専門の店から入手したいとします。かつ、ドアの種類ごとに違う職人が必要になるとします（木製なら大工、鉄製なら溶接工、など）。すなわち、現在取り付けられているドアの種類に応じて、木製ドアには大工を、鉄製ドアなら溶接工を、といった具合に職人を頼む必要があります。

## わかりやすくまとめるとこうです。

複数のファクトリーに対する 1 つのファクトリー（a factory of factories）は、個別のファクトリーを束ねてグループ化しますが、関連する（または依存する）ファクトリーの具体的なクラスを指定しません。

## Wikipedia ではこうです。

abstract factory パターンは、テーマの共通な個別のファクトリーのグループをカプセル化する手段を提供する。このとき、ファクトリーの具体的なクラスを指定しない。