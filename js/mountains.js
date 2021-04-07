var mountains = [
{"mountainCountries":["Nepal","China"],"prominenceMetres": 8848,"Range": "Mahalangur Himalaya","heightMetres": 8848,"mountainName":["Mount Everest","Sagarmatha","Chomolungma"],"mountainMainCountry": "Nepal","rank": 1,"parentMountain": "Mount Everest","location": {"lon": 86.92528,"lat": 27.98806},"heightFeet": 29029,"FirstAscentDate": "1952-12-31T14:00:00.000Z","mountainMainName": "Mount Everest","firstAscentYear": 1953}
,
{"mountainCountries":["Pakistan","China"],"prominenceMetres": 4020,"Range": "Baltoro Karakoram","heightMetres": 8611,"mountainName":["K2","Qogir","Godwin Austen"],"mountainMainCountry": "Pakistan","rank": 2,"parentMountain": "Mount Everest","location": {"lon": 76.51333,"lat": 35.88139},"heightFeet": 28251,"FirstAscentDate": "1953-12-31T14:00:00.000Z","mountainMainName": "K2","firstAscentYear": 1954}
,
{"mountainCountries":["India","Nepal"],"prominenceMetres": 3922,"Range": "Kangchenjunga Himalaya","heightMetres": 8586,"mountainName":["Kangchenjunga"],"mountainMainCountry": "India","rank": 3,"parentMountain": "Mount Everest","location": {"lon": 88.1475,"lat": 27.70333},"heightFeet": 28169,"FirstAscentDate": "1954-12-31T14:00:00.000Z","mountainMainName": "Kangchenjunga","firstAscentYear": 1955}
,
{"mountainCountries":["Nepal","China"],"prominenceMetres": 610,"Range": "Mahalangur Himalaya","heightMetres": 8516,"mountainName":["Lhotse"],"mountainMainCountry": "Nepal","rank": 4,"parentMountain": "Mount Everest","location": {"lon": 86.93306,"lat": 27.96167},"heightFeet": 27940,"FirstAscentDate": "1955-12-31T14:00:00.000Z","mountainMainName": "Lhotse","firstAscentYear": 1956}
,
{"mountainCountries":["Nepal","China"],"prominenceMetres": 2378,"Range": "Mahalangur Himalaya","heightMetres": 8485,"mountainName":["Makalu"],"mountainMainCountry": "Nepal","rank": 5,"parentMountain": "Mount Everest","location": {"lon": 87.08889,"lat": 27.88972},"heightFeet": 27838,"FirstAscentDate": "1954-12-31T14:00:00.000Z","mountainMainName": "Makalu","firstAscentYear": 1955}
,
{"mountainCountries":["Nepal","China"],"prominenceMetres": 2340,"Range": "Mahalangur Himalaya","heightMetres": 8188,"mountainName":["Cho Oyu"],"mountainMainCountry": "Nepal","rank": 6,"parentMountain": "Mount Everest","location": {"lon": 86.66083,"lat": 28.09417},"heightFeet": 26864,"FirstAscentDate": "1953-12-31T14:00:00.000Z","mountainMainName": "Cho Oyu","firstAscentYear": 1954}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 3357,"Range": "Dhaulagiri Himalaya","heightMetres": 8167,"mountainName":["Dhaulagiri I"],"mountainMainCountry": "Nepal","rank": 7,"parentMountain": "K2","location": {"lon": 83.49306,"lat": 28.69667},"heightFeet": 26795,"FirstAscentDate": "1959-12-31T14:00:00.000Z","mountainMainName": "Dhaulagiri I","firstAscentYear": 1960}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 3092,"Range": "Manaslu Himalaya","heightMetres": 8163,"mountainName":["Manaslu"],"mountainMainCountry": "Nepal","rank": 8,"parentMountain": "Cho Oyu","location": {"lon": 84.55972,"lat": 28.55},"heightFeet": 26781,"FirstAscentDate": "1955-12-31T14:00:00.000Z","mountainMainName": "Manaslu","firstAscentYear": 1956}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 4608,"Range": "Nanga Parbat Himalaya","heightMetres": 8126,"mountainName":["Nanga Parbat"],"mountainMainCountry": "Pakistan","rank": 9,"parentMountain": "Dhaulagiri","location": {"lon": 74.58917,"lat": 35.23722},"heightFeet": 26660,"FirstAscentDate": "1952-12-31T14:00:00.000Z","mountainMainName": "Nanga Parbat","firstAscentYear": 1953}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 2984,"Range": "Annapurna Himalaya","heightMetres": 8091,"mountainName":["Annapurna I"],"mountainMainCountry": "Nepal","rank": 10,"parentMountain": "Cho Oyu","location": {"lon": 83.82028,"lat": 28.59556},"heightFeet": 26545,"FirstAscentDate": "1949-12-31T14:00:00.000Z","mountainMainName": "Annapurna I","firstAscentYear": 1950}
,
{"mountainCountries":["Pakistan","China"],"prominenceMetres": 2155,"Range": "Baltoro Karakoram","heightMetres": 8080,"mountainName":["Gasherbrum I","Hidden Peak","K5"],"mountainMainCountry": "Pakistan","rank": 11,"parentMountain": "K2","location": {"lon": 76.69639,"lat": 35.72444},"heightFeet": 26509,"FirstAscentDate": "1957-12-31T14:00:00.000Z","mountainMainName": "Gasherbrum I","firstAscentYear": 1958}
,
{"mountainCountries":["Pakistan","China"],"prominenceMetres": 1701,"Range": "Baltoro Karakoram","heightMetres": 8051,"mountainName":["Broad Peak"],"mountainMainCountry": "Pakistan","rank": 12,"parentMountain": "Gasherbrum I","location": {"lon": 76.56833,"lat": 35.81056},"heightFeet": 26414,"FirstAscentDate": "1956-12-31T14:00:00.000Z","mountainMainName": "Broad Peak","firstAscentYear": 1957}
,
{"mountainCountries":["Pakistan","China"],"prominenceMetres": 1524,"Range": "Baltoro Karakoram","heightMetres": 8035,"mountainName":["Gasherbrum II","K4"],"mountainMainCountry": "Pakistan","rank": 13,"parentMountain": "Gasherbrum I","location": {"lon": 76.65333,"lat": 35.75778},"heightFeet": 26362,"FirstAscentDate": "1955-12-31T14:00:00.000Z","mountainMainName": "Gasherbrum II","firstAscentYear": 1956}
,
{"mountainCountries":["China"],"prominenceMetres": 2897,"Range": "Jugal Himalaya","heightMetres": 8027,"mountainName":["Shishapangma","Gosainthān"],"mountainMainCountry": "China","rank": 14,"parentMountain": "Cho Oyu","location": {"lon": 85.77861,"lat": 28.35333},"heightFeet": 26335,"FirstAscentDate": "1963-12-31T14:00:00.000Z","mountainMainName": "Shishapangma","firstAscentYear": 1964}
,
{"mountainCountries":["Nepal","China"],"prominenceMetres": 672,"Range": "Mahalangur Himalaya","heightMetres": 7952,"mountainName":["Gyachung Kang"],"mountainMainCountry": "Nepal","rank": 15,"parentMountain": "Cho Oyu","location": {"lon": 86.745,"lat": 28.09806},"heightFeet": 26089,"FirstAscentDate": "1963-12-31T14:00:00.000Z","mountainMainName": "Gyachung Kang","firstAscentYear": 1964}
,
{"mountainCountries":["Pakistan","China"],"prominenceMetres": 355,"Range": "Baltoro Karakoram","heightMetres": 7946,"mountainName":["Gasherbrum III","K3a"],"mountainMainCountry": "Pakistan","rank": 15,"parentMountain": "Gasherbrum II","location": {"lon": 76.64167,"lat": 35.75917},"heightFeet": 26070,"FirstAscentDate": "1974-12-31T13:00:00.000Z","mountainMainName": "Gasherbrum III","firstAscentYear": 1975}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 2437,"Range": "Annapurna Himalaya","heightMetres": 7937,"mountainName":["Annapurna II"],"mountainMainCountry": "Nepal","rank": 16,"parentMountain": "Annapurna I","location": {"lon": 84.12194,"lat": 28.53472},"heightFeet": 26040,"FirstAscentDate": "1959-12-31T14:00:00.000Z","mountainMainName": "Annapurna II","firstAscentYear": 1960}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 712,"Range": "Baltoro Karakoram","heightMetres": 7932,"mountainName":["Gasherbrum IV","K3"],"mountainMainCountry": "Pakistan","rank": 17,"parentMountain": "Gasherbrum III","location": {"lon": 76.61611,"lat": 35.76056},"heightFeet": 26024,"FirstAscentDate": "1957-12-31T14:00:00.000Z","mountainMainName": "Gasherbrum IV","firstAscentYear": 1958}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 1633,"Range": "Manaslu Himalaya","heightMetres": 7893,"mountainName":["Himalchuli"],"mountainMainCountry": "Nepal","rank": 18,"parentMountain": "Manaslu","location": {"lon": 84.63972,"lat": 28.43667},"heightFeet": 25896,"FirstAscentDate": "1959-12-31T14:00:00.000Z","mountainMainName": "Himalchuli","firstAscentYear": 1960}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 2525,"Range": "Hispar Karakoram","heightMetres": 7884,"mountainName":["Distaghil Sar"],"mountainMainCountry": "Pakistan","rank": 19,"parentMountain": "K2","location": {"lon": 75.18778,"lat": 36.32583},"heightFeet": 25866,"FirstAscentDate": "1959-12-31T14:00:00.000Z","mountainMainName": "Distaghil Sar","firstAscentYear": 1960}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 1011,"Range": "Manaslu Himalaya","heightMetres": 7871,"mountainName":["Ngadi Chuli"],"mountainMainCountry": "Nepal","rank": 20,"parentMountain": "Manaslu","location": {"lon": 84.56667,"lat": 28.50333},"heightFeet": 25823,"FirstAscentDate": "1969-12-31T14:00:00.000Z","mountainMainName": "Ngadi Chuli","firstAscentYear": 1970}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 305,"Range": "Mahalangur Himalaya","heightMetres": 7864,"mountainName":["Nuptse"],"mountainMainCountry": "Nepal","rank": 20,"parentMountain": "Lhotse","location": {"lon": 86.88694,"lat": 27.9675},"heightFeet": 25801,"FirstAscentDate": "1960-12-31T14:00:00.000Z","mountainMainName": "Nuptse","firstAscentYear": 1961}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1765,"Range": "Hispar Karakoram","heightMetres": 7823,"mountainName":["Khunyang Chhish"],"mountainMainCountry": "Pakistan","rank": 21,"parentMountain": "Distaghil Sar","location": {"lon": 75.20778,"lat": 36.20528},"heightFeet": 25666,"FirstAscentDate": "1970-12-31T14:00:00.000Z","mountainMainName": "Khunyang Chhish","firstAscentYear": 1971}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 2457,"Range": "Masherbrum Karakoram","heightMetres": 7821,"mountainName":["Masherbrum","K1"],"mountainMainCountry": "Pakistan","rank": 22,"parentMountain": "Gasherbrum I","location": {"lon": 76.30583,"lat": 35.64111},"heightFeet": 25659,"FirstAscentDate": "1959-12-31T14:00:00.000Z","mountainMainName": "Masherbrum","firstAscentYear": 1960}
,
{"mountainCountries":["India"],"prominenceMetres": 3139,"Range": "Garhwal Himalaya","heightMetres": 7816,"mountainName":["Nanda Devi"],"mountainMainCountry": "India","rank": 23,"parentMountain": "Dhaulagiri","location": {"lon": 79.97083,"lat": 30.37583},"heightFeet": 25643,"FirstAscentDate": "1935-12-31T14:00:00.000Z","mountainMainName": "Nanda Devi","firstAscentYear": 1936}
,
{"mountainCountries":["China"],"prominenceMetres": 590,"Range": "Mahalangur Himalaya","heightMetres": 7804,"mountainName":["Chomo Lonzo"],"mountainMainCountry": "China","rank": 24,"parentMountain": "Makalu","location": {"lon": 87.10778,"lat": 27.93056},"heightFeet": 25604,"FirstAscentDate": "1953-12-31T14:00:00.000Z","mountainMainName": "Chomo Lonzo","firstAscentYear": 1954}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 3118,"Range": "Batura Karakoram","heightMetres": 7795,"mountainName":["Batura Sar"],"mountainMainCountry": "Pakistan","rank": 25,"parentMountain": "Distaghil Sar","location": {"lon": 74.5225,"lat": 36.51028},"heightFeet": 25574,"FirstAscentDate": "1975-12-31T13:00:00.000Z","mountainMainName": "Batura Sar","firstAscentYear": 1976}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1660,"Range": "Hispar Karakoram","heightMetres": 7790,"mountainName":["Kanjut Sar"],"mountainMainCountry": "Pakistan","rank": 26,"parentMountain": "Khunyang Chhish","location": {"lon": 75.41694,"lat": 36.20556},"heightFeet": 25558,"FirstAscentDate": "1958-12-31T14:00:00.000Z","mountainMainName": "Kanjut Sar","firstAscentYear": 1959}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 2818,"Range": "Rakaposhi-Haramosh Karakoram","heightMetres": 7788,"mountainName":["Rakaposhi"],"mountainMainCountry": "Pakistan","rank": 27,"parentMountain": "Khunyang Chhish","location": {"lon": 74.48944,"lat": 36.1425},"heightFeet": 25551,"FirstAscentDate": "1957-12-31T14:00:00.000Z","mountainMainName": "Rakaposhi","firstAscentYear": 1958}
,
{"mountainCountries":["China"],"prominenceMetres": 4106,"Range": "Assam Himalaya","heightMetres": 7782,"mountainName":["Namcha Barwa"],"mountainMainCountry": "China","rank": 28,"parentMountain": "Kangchenjunga","location": {"lon": 95.05528,"lat": 29.63111},"heightFeet": 25531,"FirstAscentDate": "1991-12-31T13:00:00.000Z","mountainMainName": "Namcha Barwa","firstAscentYear": 1992}
,
{"mountainCountries":["India"],"prominenceMetres": 2825,"Range": "Garhwal Himalaya","heightMetres": 7756,"mountainName":["Kamet"],"mountainMainCountry": "India","rank": 29,"parentMountain": "Nanda Devi","location": {"lon": 79.59167,"lat": 30.92},"heightFeet": 25446,"FirstAscentDate": "1930-12-31T14:00:00.000Z","mountainMainName": "Kamet","firstAscentYear": 1931}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 2397,"Range": "Dhaulagiri Himalaya","heightMetres": 7751,"mountainName":["Dhaulagiri II"],"mountainMainCountry": "Nepal","rank": 30,"parentMountain": "Dhaulagiri","location": {"lon": 83.38833,"lat": 28.76278},"heightFeet": 25430,"FirstAscentDate": "1970-12-31T14:00:00.000Z","mountainMainName": "Dhaulagiri II","firstAscentYear": 1971}
,
{"mountainCountries":["India","Pakistan"],"prominenceMetres": 2160,"Range": "Saltoro Karakoram","heightMetres": 7742,"mountainName":["Saltoro Kangri","K10"],"mountainMainCountry": "India","rank": 31,"parentMountain": "Gasherbrum I","location": {"lon": 76.84806,"lat": 35.39917},"heightFeet": 25400,"FirstAscentDate": "1961-12-31T14:00:00.000Z","mountainMainName": "Saltoro Kangri","firstAscentYear": 1962}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 1036,"Range": "Kangchenjunga Himalaya","heightMetres": 7711,"mountainName":["Kumbhakarna","Jannu"],"mountainMainCountry": "Nepal","rank": 32,"parentMountain": "Kangchenjunga","location": {"lon": 88.04444,"lat": 27.68222},"heightFeet": 25299,"FirstAscentDate": "1961-12-31T14:00:00.000Z","mountainMainName": "Kumbhakarna","firstAscentYear": 1962}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 3910,"Range": "Hindu Kush","heightMetres": 7708,"mountainName":["Tirich Mir"],"mountainMainCountry": "Pakistan","rank": 33,"parentMountain": "Batura Sar","location": {"lon": 71.84167,"lat": 36.25528},"heightFeet": 25289,"FirstAscentDate": "1949-12-31T14:00:00.000Z","mountainMainName": "Tirich Mir","firstAscentYear": 1950}
,
{"mountainCountries":["China"],"prominenceMetres": 433,"Range": "Langtang Himalaya","heightMetres": 7703,"mountainName":["Molamenqing"],"mountainMainCountry": "China","rank": 33,"parentMountain": "Shishapangma","location": {"lon": 85.80972,"lat": 28.355},"heightFeet": 25272,"FirstAscentDate": "1980-12-31T13:00:00.000Z","mountainMainName": "Molamenqing","firstAscentYear": 1981}
,
{"mountainCountries":["China"],"prominenceMetres": 2788,"Range": "Nalakankar Himalaya","heightMetres": 7694,"mountainName":["Gurla Mandhata"],"mountainMainCountry": "China","rank": 34,"parentMountain": "Dhaulagiri","location": {"lon": 81.29667,"lat": 30.43861},"heightFeet": 25243,"FirstAscentDate": "1984-12-31T13:00:00.000Z","mountainMainName": "Gurla Mandhata","firstAscentYear": 1985}
,
{"mountainCountries":["India"],"prominenceMetres": 2304,"Range": "Saser Karakoram","heightMetres": 7672,"mountainName":["Saser Kangri I","K22"],"mountainMainCountry": "India","rank": 35,"parentMountain": "Gasherbrum I","location": {"lon": 77.7525,"lat": 34.86667},"heightFeet": 25171,"FirstAscentDate": "1972-12-31T13:00:00.000Z","mountainMainName": "Saser Kangri I","firstAscentYear": 1973}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1624,"Range": "Masherbrum Karakoram","heightMetres": 7665,"mountainName":["Chogolisa"],"mountainMainCountry": "Pakistan","rank": 36,"parentMountain": "Masherbrum","location": {"lon": 76.57472,"lat": 35.61306},"heightFeet": 25148,"FirstAscentDate": "1974-12-31T13:00:00.000Z","mountainMainName": "Chogolisa","firstAscentYear": 1975}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 469,"Range": "Dhaulagiri Himalaya","heightMetres": 7661,"mountainName":["Dhaulagiri IV"],"mountainMainCountry": "Nepal","rank": 36,"parentMountain": "Dhaulagiri II","location": {"lon": 83.31528,"lat": 28.73583},"heightFeet": 25135,"FirstAscentDate": "1974-12-31T13:00:00.000Z","mountainMainName": "Dhaulagiri IV","firstAscentYear": 1975}
,
{"mountainCountries":["China"],"prominenceMetres": 3585,"Range": "Kongur Shan (Eastern Pamirs)","heightMetres": 7649,"mountainName":["Kongur Tagh"],"mountainMainCountry": "China","rank": 37,"parentMountain": "Distaghil Sar","location": {"lon": 75.31333,"lat": 38.59333},"heightFeet": 25095,"FirstAscentDate": "1980-12-31T13:00:00.000Z","mountainMainName": "Kongur Tagh","firstAscentYear": 1981}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 340,"Range": "Dhaulagiri Himalaya","heightMetres": 7618,"mountainName":["Dhaulagiri V"],"mountainMainCountry": "Nepal","rank": 37,"parentMountain": "Dhaulagiri IV","location": {"lon": 83.36139,"lat": 28.73389},"heightFeet": 24993,"FirstAscentDate": "1974-12-31T13:00:00.000Z","mountainMainName": "Dhaulagiri V","firstAscentYear": 1975}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1240,"Range": "Batura Karakoram","heightMetres": 7611,"mountainName":["Shispare"],"mountainMainCountry": "Pakistan","rank": 38,"parentMountain": "Batura Sar","location": {"lon": 74.68083,"lat": 36.44056},"heightFeet": 24970,"FirstAscentDate": "1973-12-31T13:00:00.000Z","mountainMainName": "Shispare","firstAscentYear": 1974}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 997,"Range": "Hispar Karakoram","heightMetres": 7577,"mountainName":["Trivor"],"mountainMainCountry": "Pakistan","rank": 39,"parentMountain": "Distaghil Sar","location": {"lon": 75.085,"lat": 36.2875},"heightFeet": 24859,"FirstAscentDate": "1959-12-31T14:00:00.000Z","mountainMainName": "Trivor","firstAscentYear": 1960}
,
{"mountainCountries":["Bhutan","China"],"prominenceMetres": 2995,"Range": "Kula Kangri Himalaya","heightMetres": 7570,"mountainName":["Gangkhar Puensum"],"mountainMainCountry": "Bhutan","rank": 40,"parentMountain": "Kangchenjunga","location": {"lon": 90.45528,"lat": 28.04722},"heightFeet": 24836,"mountainMainName": "Gangkhar Puensum","firstAscentYear": null}
,
{"mountainCountries":["China"],"prominenceMetres": 3642,"Range": "Daxue Shan (Hengduan Shan)","heightMetres": 7556,"mountainName":["Gongga Shan","Minya Konka"],"mountainMainCountry": "China","rank": 41,"parentMountain": "Mount Everest","location": {"lon": 101.87972,"lat": 29.59528},"heightFeet": 24790,"FirstAscentDate": "1931-12-31T14:00:00.000Z","mountainMainName": "Gongga Shan","firstAscentYear": 1932}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 703,"Range": "Annapurna Himalaya","heightMetres": 7555,"mountainName":["Annapurna III"],"mountainMainCountry": "Nepal","rank": 42,"parentMountain": "Annapurna I","location": {"lon": 83.99,"lat": 28.585},"heightFeet": 24787,"FirstAscentDate": "1960-12-31T14:00:00.000Z","mountainMainName": "Annapurna III","firstAscentYear": 1961}
,
{"mountainCountries":["Pakistan","China"],"prominenceMetres": 1085,"Range": "Baltoro Karakoram","heightMetres": 7545,"mountainName":["Skyang Kangri"],"mountainMainCountry": "Pakistan","rank": 43,"parentMountain": "K2","location": {"lon": 76.5675,"lat": 35.92639},"heightFeet": 24754,"FirstAscentDate": "1975-12-31T13:00:00.000Z","mountainMainName": "Skyang Kangri","firstAscentYear": 1976}
,
{"mountainCountries":["China"],"prominenceMetres": 514,"Range": "Mahalangur Himalaya","heightMetres": 7543,"mountainName":["Changtse"],"mountainMainCountry": "China","rank": 44,"parentMountain": "Mount Everest","location": {"lon": 86.91417,"lat": 28.02472},"heightFeet": 24747,"FirstAscentDate": "1981-12-31T13:00:00.000Z","mountainMainName": "Changtse","firstAscentYear": 1982}
,
{"mountainCountries":["China","Bhutan"],"prominenceMetres": 1654,"Range": "Kula Kangri Himalaya","heightMetres": 7538,"mountainName":["Kula Kangri"],"mountainMainCountry": "China","rank": 45,"parentMountain": "Gangkhar Puensum","location": {"lon": 90.61639,"lat": 28.22694},"heightFeet": 24731,"FirstAscentDate": "1985-12-31T13:00:00.000Z","mountainMainName": "Kula Kangri","firstAscentYear": 1986}
,
{"mountainCountries":["China"],"prominenceMetres": 840,"Range": "Kongur Shan (Eastern Pamirs)","heightMetres": 7530,"mountainName":["Kongur Tiube"],"mountainMainCountry": "China","rank": 46,"parentMountain": "Kongur Tagh","location": {"lon": 75.19583,"lat": 38.61583},"heightFeet": 24705,"FirstAscentDate": "1955-12-31T14:00:00.000Z","mountainMainName": "Kongur Tiube","firstAscentYear": 1956}
,
{"mountainCountries":["India"],"prominenceMetres": 1803,"Range": "Rimo Karakoram","heightMetres": 7516,"mountainName":["Mamostong Kangri"],"mountainMainCountry": "India","rank": 47,"parentMountain": "Gasherbrum I","location": {"lon": 77.5775,"lat": 35.14194},"heightFeet": 24659,"FirstAscentDate": "1983-12-31T13:00:00.000Z","mountainMainName": "Mamostong Kangri","firstAscentYear": 1984}
,
{"mountainCountries":["India"],"prominenceMetres": 1458,"Range": "Saser Karakoram","heightMetres": 7513,"mountainName":["Saser Kangri II E"],"mountainMainCountry": "India","rank": 48,"parentMountain": "Saser Kangri I","location": {"lon": 77.80667,"lat": 34.80472},"heightFeet": 24649,"FirstAscentDate": "2010-12-31T13:00:00.000Z","mountainMainName": "Saser Kangri II E","firstAscentYear": 2011}
,
{"mountainCountries":["China"],"prominenceMetres": 2698,"Range": "Muztagata (Eastern Pamirs)","heightMetres": 7509,"mountainName":["Muztagh Ata"],"mountainMainCountry": "China","rank": 49,"parentMountain": "Kongur Tagh","location": {"lon": 75.11611,"lat": 38.27583},"heightFeet": 24636,"FirstAscentDate": "1955-12-31T14:00:00.000Z","mountainMainName": "Muztagh Ata","firstAscentYear": 1956}
,
{"mountainCountries":["Tajikistan"],"prominenceMetres": 3402,"Range": "Pamir (Academy of Sciences Range)","heightMetres": 7495,"mountainName":["Ismoil Somoni Peak"],"mountainMainCountry": "Tajikistan","rank": 50,"parentMountain": "Muztagh Ata","location": {"lon": 72.01583,"lat": 38.94306},"heightFeet": 24590,"FirstAscentDate": "1932-12-31T14:00:00.000Z","mountainMainName": "Ismoil Somoni Peak","firstAscentYear": 1933}
,
{"mountainCountries":["India"],"prominenceMetres": 835,"Range": "Saser Karakoram","heightMetres": 7495,"mountainName":["Saser Kangri III"],"mountainMainCountry": "India","rank": 51,"parentMountain": "Saser Kangri I","location": {"lon": 77.785,"lat": 34.84556},"heightFeet": 24590,"FirstAscentDate": "1985-12-31T13:00:00.000Z","mountainMainName": "Saser Kangri III","firstAscentYear": 1986}
,
{"mountainCountries":["Afghanistan","Pakistan"],"prominenceMetres": 2024,"Range": "Hindu Kush","heightMetres": 7492,"mountainName":["Noshaq"],"mountainMainCountry": "Afghanistan","rank": 52,"parentMountain": "Tirich Mir","location": {"lon": 71.82861,"lat": 36.43222},"heightFeet": 24580,"FirstAscentDate": "1959-12-31T14:00:00.000Z","mountainMainName": "Noshaq","firstAscentYear": 1960}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 884,"Range": "Hispar Karakoram","heightMetres": 7492,"mountainName":["Pumari Chhish"],"mountainMainCountry": "Pakistan","rank": 53,"parentMountain": "Khunyang Chhish","location": {"lon": 75.25028,"lat": 36.21139},"heightFeet": 24580,"FirstAscentDate": "1978-12-31T13:00:00.000Z","mountainMainName": "Pumari Chhish","firstAscentYear": 1979}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 647,"Range": "Batura Karakoram","heightMetres": 7476,"mountainName":["Passu Sar"],"mountainMainCountry": "Pakistan","rank": 54,"parentMountain": "Batura Sar","location": {"lon": 74.58778,"lat": 36.48778},"heightFeet": 24528,"FirstAscentDate": "1993-12-31T13:00:00.000Z","mountainMainName": "Passu Sar","firstAscentYear": 1994}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1374,"Range": "Hispar Karakoram","heightMetres": 7469,"mountainName":["Yukshin Gardan Sar"],"mountainMainCountry": "Pakistan","rank": 55,"parentMountain": "Pumari Chhish","location": {"lon": 75.37472,"lat": 36.25111},"heightFeet": 24505,"FirstAscentDate": "1983-12-31T13:00:00.000Z","mountainMainName": "Yukshin Gardan Sar","firstAscentYear": 1984}
,
{"mountainCountries":["India","China"],"prominenceMetres": 1703,"Range": "Siachen Karakoram","heightMetres": 7462,"mountainName":["Teram Kangri I"],"mountainMainCountry": "India","rank": 56,"parentMountain": "Gasherbrum I","location": {"lon": 77.07833,"lat": 35.58},"heightFeet": 24482,"FirstAscentDate": "1974-12-31T13:00:00.000Z","mountainMainName": "Teram Kangri I","firstAscentYear": 1975}
,
{"mountainCountries":["India","China","Nepal"],"prominenceMetres": 1298,"Range": "Kangchenjunga Himalaya","heightMetres": 7462,"mountainName":["Jongsong Peak"],"mountainMainCountry": "India","rank": 57,"parentMountain": "Kangchenjunga","location": {"lon": 88.13583,"lat": 27.88167},"heightFeet": 24482,"FirstAscentDate": "1929-12-31T14:00:00.000Z","mountainMainName": "Jongsong Peak","firstAscentYear": 1930}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 2193,"Range": "Rakaposhi-Haramosh Karakoram","heightMetres": 7458,"mountainName":["Malubiting"],"mountainMainCountry": "Pakistan","rank": 58,"parentMountain": "Rakaposhi","location": {"lon": 74.87528,"lat": 36.00333},"heightFeet": 24469,"FirstAscentDate": "1970-12-31T14:00:00.000Z","mountainMainName": "Malubiting","firstAscentYear": 1971}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 563,"Range": "Annapurna Himalaya","heightMetres": 7455,"mountainName":["Gangapurna"],"mountainMainCountry": "Nepal","rank": 59,"parentMountain": "Annapurna III","location": {"lon": 83.96361,"lat": 28.605},"heightFeet": 24459,"FirstAscentDate": "1964-12-31T14:00:00.000Z","mountainMainName": "Gangapurna","firstAscentYear": 1965}
,
{"mountainCountries":["Kyrgyzstan","China"],"prominenceMetres": 4148,"Range": "Tian Shan","heightMetres": 7439,"mountainName":["Jengish Chokusu","Tömür","Pk Pobeda"],"mountainMainCountry": "Kyrgyzstan","rank": 60,"parentMountain": "Ismail Samani Peak","location": {"lon": 80.12972,"lat": 42.03472},"heightFeet": 24406,"FirstAscentDate": "1955-12-31T14:00:00.000Z","mountainMainName": "Jengish Chokusu","firstAscentYear": 1956}
,
{"mountainCountries":["India"],"prominenceMetres": 229,"Range": "Garhwal Himalaya","heightMetres": 7434,"mountainName":["Sunanda Devi","Nanda Devi East"],"mountainMainCountry": "India","rank": 60,"parentMountain": "Nanda Devi","location": {"lon": 79.99444,"lat": 30.36667},"heightFeet": 24390,"FirstAscentDate": "1938-12-31T14:00:00.000Z","mountainMainName": "Sunanda Devi","firstAscentYear": 1939}
,
{"mountainCountries":["India","Pakistan"],"prominenceMetres": 1978,"Range": "Saltoro Karakoram","heightMetres": 7428,"mountainName":["K12"],"mountainMainCountry": "India","rank": 61,"parentMountain": "Saltoro Kangri","location": {"lon": 77.02222,"lat": 35.29583},"heightFeet": 24370,"FirstAscentDate": "1973-12-31T13:00:00.000Z","mountainMainName": "K12","firstAscentYear": 1974}
,
{"mountainCountries":["Nepal","China"],"prominenceMetres": 2352,"Range": "Ganesh Himalaya","heightMetres": 7422,"mountainName":["Yangra","Ganesh I"],"mountainMainCountry": "Nepal","rank": 62,"parentMountain": "Manaslu","location": {"lon": 85.12722,"lat": 28.39139},"heightFeet": 24350,"FirstAscentDate": "1954-12-31T14:00:00.000Z","mountainMainName": "Yangra","firstAscentYear": 1955}
,
{"mountainCountries":["Pakistan","India","China"],"prominenceMetres": 642,"Range": "Siachen Karakoram","heightMetres": 7422,"mountainName":["Sia Kangri"],"mountainMainCountry": "Pakistan","rank": 63,"parentMountain": "Gasherbrum I","location": {"lon": 76.76167,"lat": 35.66333},"heightFeet": 24350,"FirstAscentDate": "1933-12-31T14:00:00.000Z","mountainMainName": "Sia Kangri","firstAscentYear": 1934}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 907,"Range": "Hispar Karakoram","heightMetres": 7414,"mountainName":["Momhil Sar"],"mountainMainCountry": "Pakistan","rank": 64,"parentMountain": "Trivor","location": {"lon": 75.03639,"lat": 36.31778},"heightFeet": 24324,"FirstAscentDate": "1963-12-31T14:00:00.000Z","mountainMainName": "Momhil Sar","firstAscentYear": 1964}
,
{"mountainCountries":["India","Nepal"],"prominenceMetres": 720,"Range": "Kangchenjunga Himalaya","heightMetres": 7412,"mountainName":["Kabru N"],"mountainMainCountry": "India","rank": 65,"parentMountain": "Kangchenjunga","location": {"lon": 88.11667,"lat": 27.63389},"heightFeet": 24318,"FirstAscentDate": "1993-12-31T13:00:00.000Z","mountainMainName": "Kabru N","firstAscentYear": 1994}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1152,"Range": "Baltoro Karakoram","heightMetres": 7410,"mountainName":["Skil Brum"],"mountainMainCountry": "Pakistan","rank": 66,"parentMountain": "K2","location": {"lon": 76.42861,"lat": 35.85083},"heightFeet": 24311,"FirstAscentDate": "1956-12-31T14:00:00.000Z","mountainMainName": "Skil Brum","firstAscentYear": 1957}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 2277,"Range": "Rakaposhi-Haramosh Karakoram","heightMetres": 7409,"mountainName":["Haramosh Peak"],"mountainMainCountry": "Pakistan","rank": 67,"parentMountain": "Malubiting","location": {"lon": 74.8975,"lat": 35.84},"heightFeet": 24308,"FirstAscentDate": "1957-12-31T14:00:00.000Z","mountainMainName": "Haramosh Peak","firstAscentYear": 1958}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1043,"Range": "Hindu Kush","heightMetres": 7403,"mountainName":["Istor-o-Nal"],"mountainMainCountry": "Pakistan","rank": 68,"parentMountain": "Noshaq","location": {"lon": 71.89833,"lat": 36.37556},"heightFeet": 24288,"FirstAscentDate": "1968-12-31T14:00:00.000Z","mountainMainName": "Istor-o-Nal","firstAscentYear": 1969}
,
{"mountainCountries":["India","Pakistan"],"prominenceMetres": 1493,"Range": "Saltoro Karakoram","heightMetres": 7401,"mountainName":["Ghent Kangri"],"mountainMainCountry": "India","rank": 69,"parentMountain": "Saltoro Kangri","location": {"lon": 76.80056,"lat": 35.51778},"heightFeet": 24281,"FirstAscentDate": "1960-12-31T14:00:00.000Z","mountainMainName": "Ghent Kangri","firstAscentYear": 1961}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 688,"Range": "Batura Karakoram","heightMetres": 7388,"mountainName":["Ultar"],"mountainMainCountry": "Pakistan","rank": 70,"parentMountain": "Shispare","location": {"lon": 74.71667,"lat": 36.39083},"heightFeet": 24239,"FirstAscentDate": "1995-12-31T13:00:00.000Z","mountainMainName": "Ultar","firstAscentYear": 1996}
,
{"mountainCountries":["India"],"prominenceMetres": 1428,"Range": "Rimo Karakoram","heightMetres": 7385,"mountainName":["Rimo I"],"mountainMainCountry": "India","rank": 71,"parentMountain": "Teram Kangri I","location": {"lon": 77.36889,"lat": 35.355},"heightFeet": 24229,"FirstAscentDate": "1987-12-31T13:00:00.000Z","mountainMainName": "Rimo I","firstAscentYear": 1988}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 650,"Range": "Dhaulagiri Himalaya","heightMetres": 7385,"mountainName":["Churen Himal"],"mountainMainCountry": "Nepal","rank": 72,"parentMountain": "Dhaulagiri IV","location": {"lon": 83.2175,"lat": 28.73472},"heightFeet": 24229,"FirstAscentDate": "1969-12-31T14:00:00.000Z","mountainMainName": "Churen Himal","firstAscentYear": 1970}
,
{"mountainCountries":["India","China"],"prominenceMetres": 520,"Range": "Siachen Karakoram","heightMetres": 7382,"mountainName":["Teram Kangri III"],"mountainMainCountry": "India","rank": 73,"parentMountain": "Teram Kangri I","location": {"lon": 77.04806,"lat": 35.59972},"heightFeet": 24219,"FirstAscentDate": "1978-12-31T13:00:00.000Z","mountainMainName": "Teram Kangri III","firstAscentYear": 1979}
,
{"mountainCountries":["India","Pakistan"],"prominenceMetres": 1320,"Range": "Saltoro Karakoram","heightMetres": 7380,"mountainName":["Sherpi Kangri"],"mountainMainCountry": "India","rank": 74,"parentMountain": "Ghent Kangri","location": {"lon": 76.78139,"lat": 35.46611},"heightFeet": 24213,"FirstAscentDate": "1975-12-31T13:00:00.000Z","mountainMainName": "Sherpi Kangri","firstAscentYear": 1976}
,
{"mountainCountries":["China"],"prominenceMetres": 1957,"Range": "Labuche Himalaya","heightMetres": 7367,"mountainName":["Labuche Kang"],"mountainMainCountry": "China","rank": 75,"parentMountain": "Cho Oyu","location": {"lon": 86.35083,"lat": 28.30417},"heightFeet": 24170,"FirstAscentDate": "1986-12-31T13:00:00.000Z","mountainMainName": "Labuche Kang","firstAscentYear": 1987}
,
{"mountainCountries":["India","Nepal"],"prominenceMetres": 1168,"Range": "Kangchenjunga Himalaya","heightMetres": 7362,"mountainName":["Kirat Chuli"],"mountainMainCountry": "India","rank": 76,"parentMountain": "Kangchenjunga","location": {"lon": 88.19528,"lat": 27.78778},"heightFeet": 24153,"FirstAscentDate": "1938-12-31T14:00:00.000Z","mountainMainName": "Kirat Chuli","firstAscentYear": 1939}
,
{"mountainCountries":["India","China"],"prominenceMetres": 217,"Range": "Garhwal Himalaya","heightMetres": 7355,"mountainName":["Abi Gamin"],"mountainMainCountry": "India","rank": 76,"parentMountain": "Kamet","location": {"lon": 79.6025,"lat": 30.9325},"heightFeet": 24131,"FirstAscentDate": "1949-12-31T14:00:00.000Z","mountainMainName": "Abi Gamin","firstAscentYear": 1950}
,
{"mountainCountries":["India","Nepal"],"prominenceMetres": 432,"Range": "Kangchenjunga Himalaya","heightMetres": 7350,"mountainName":["Gimmigela","The Twins"],"mountainMainCountry": "India","rank": 76,"parentMountain": "Kangchenjunga","location": {"lon": 88.15861,"lat": 27.74083},"heightFeet": 24114,"FirstAscentDate": "1993-12-31T13:00:00.000Z","mountainMainName": "Gimmigela","firstAscentYear": 1994}
,
{"mountainCountries":["Nepal","China"],"prominenceMetres": 427,"Range": "Mahalangur Himalaya","heightMetres": 7350,"mountainName":["Nangpai Gosum"],"mountainMainCountry": "Nepal","rank": 76,"parentMountain": "Cho Oyu","location": {"lon": 86.61417,"lat": 28.07333},"heightFeet": 24114,"FirstAscentDate": "1995-12-31T13:00:00.000Z","mountainMainName": "Nangpai Gosum","firstAscentYear": 1996}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1979,"Range": "Hindu Kush","heightMetres": 7349,"mountainName":["Saraghrar"],"mountainMainCountry": "Pakistan","rank": 77,"parentMountain": "Noshaq","location": {"lon": 72.115,"lat": 36.5475},"heightFeet": 24111,"FirstAscentDate": "1958-12-31T14:00:00.000Z","mountainMainName": "Saraghrar","firstAscentYear": 1959}
,
{"mountainCountries":["Bhutan","China"],"prominenceMetres": 2065,"Range": "Jomolhari Himalaya","heightMetres": 7326,"mountainName":["Jomolhari","Chomo Lhari"],"mountainMainCountry": "Bhutan","rank": 78,"parentMountain": "Gangkhar Puensum","location": {"lon": 89.26778,"lat": 27.82667},"heightFeet": 24035,"FirstAscentDate": "1936-12-31T14:00:00.000Z","mountainMainName": "Jomolhari","firstAscentYear": 1937}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 1241,"Range": "Mahalangur Himalaya","heightMetres": 7321,"mountainName":["Chamlang"],"mountainMainCountry": "Nepal","rank": 79,"parentMountain": "Lhotse","location": {"lon": 86.97972,"lat": 27.775},"heightFeet": 24019,"FirstAscentDate": "1960-12-31T14:00:00.000Z","mountainMainName": "Chamlang","firstAscentYear": 1961}
,
{"mountainCountries":["China"],"prominenceMetres": 1295,"Range": "Baltoro Karakoram","heightMetres": 7315,"mountainName":["Chongtar"],"mountainMainCountry": "China","rank": 80,"parentMountain": "Skil Brum","location": {"lon": 76.42917,"lat": 35.91528},"heightFeet": 23999,"FirstAscentDate": "1993-12-31T13:00:00.000Z","mountainMainName": "Chongtar","firstAscentYear": 1994}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1200,"Range": "Masherbrum Karakoram","heightMetres": 7312,"mountainName":["Baltoro Kangri"],"mountainMainCountry": "Pakistan","rank": 81,"parentMountain": "Chogolisa","location": {"lon": 76.67333,"lat": 35.63917},"heightFeet": 23990,"FirstAscentDate": "1975-12-31T13:00:00.000Z","mountainMainName": "Baltoro Kangri","firstAscentYear": 1976}
,
{"mountainCountries":["China"],"prominenceMetres": 669,"Range": "Mahalangur Himalaya","heightMetres": 7309,"mountainName":["Siguang Ri"],"mountainMainCountry": "China","rank": 82,"parentMountain": "Cho Oyu","location": {"lon": 86.685,"lat": 28.14722},"heightFeet": 23980,"FirstAscentDate": "1988-12-31T13:00:00.000Z","mountainMainName": "Siguang Ri","firstAscentYear": 1989}
,
{"mountainCountries":["China"],"prominenceMetres": 1919,"Range": "Yengisogat Karakoram","heightMetres": 7295,"mountainName":["The Crown","Huang Guan"],"mountainMainCountry": "China","rank": 83,"parentMountain": "Skil Brum (K2)","location": {"lon": 76.20583,"lat": 36.10667},"heightFeet": 23934,"FirstAscentDate": "1992-12-31T13:00:00.000Z","mountainMainName": "The Crown","firstAscentYear": 1993}
,
{"mountainCountries":["China"],"prominenceMetres": 2942,"Range": "Assam Himalaya","heightMetres": 7294,"mountainName":["Gyala Peri"],"mountainMainCountry": "China","rank": 84,"parentMountain": "Mount Everest","location": {"lon": 94.96861,"lat": 29.81444},"heightFeet": 23930,"FirstAscentDate": "1985-12-31T13:00:00.000Z","mountainMainName": "Gyala Peri","firstAscentYear": 1986}
,
{"mountainCountries":["China"],"prominenceMetres": 512,"Range": "Langtang Himalaya","heightMetres": 7292,"mountainName":["Porong Ri"],"mountainMainCountry": "China","rank": 85,"parentMountain": "Shisha Pangma","location": {"lon": 85.72,"lat": 28.38944},"heightFeet": 23924,"FirstAscentDate": "1981-12-31T13:00:00.000Z","mountainMainName": "Porong Ri","firstAscentYear": 1982}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1891,"Range": "Panmah Karakoram","heightMetres": 7285,"mountainName":["Baintha Brakk","The Ogre"],"mountainMainCountry": "Pakistan","rank": 86,"parentMountain": "Kanjut Sar","location": {"lon": 75.75333,"lat": 35.9475},"heightFeet": 23901,"FirstAscentDate": "1976-12-31T13:00:00.000Z","mountainMainName": "Baintha Brakk","firstAscentYear": 1977}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 680,"Range": "Hispar Karakoram","heightMetres": 7283,"mountainName":["Yutmaru Sar"],"mountainMainCountry": "Pakistan","rank": 87,"parentMountain": "Yukshin Gardan Sar","location": {"lon": 75.36722,"lat": 36.22639},"heightFeet": 23894,"FirstAscentDate": "1979-12-31T13:00:00.000Z","mountainMainName": "Yutmaru Sar","firstAscentYear": 1980}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1962,"Range": "Masherbrum Karakoram","heightMetres": 7282,"mountainName":["Baltistan Peak","K6"],"mountainMainCountry": "Pakistan","rank": 88,"parentMountain": "Chogolisa","location": {"lon": 76.55167,"lat": 35.41833},"heightFeet": 23891,"FirstAscentDate": "1969-12-31T14:00:00.000Z","mountainMainName": "Baltistan Peak","firstAscentYear": 1970}
,
{"mountainCountries":["China"],"prominenceMetres": 1345,"Range": "Baiku Himalaya","heightMetres": 7281,"mountainName":["Kangpenqing","Gang Benchhen"],"mountainMainCountry": "China","rank": 89,"parentMountain": "Shisha Pangma","location": {"lon": 85.54556,"lat": 28.55083},"heightFeet": 23888,"FirstAscentDate": "1981-12-31T13:00:00.000Z","mountainMainName": "Kangpenqing","firstAscentYear": 1982}
,
{"mountainCountries":["Pakistan","China"],"prominenceMetres": 1710,"Range": "Baltoro Karakoram","heightMetres": 7276,"mountainName":["Muztagh Tower"],"mountainMainCountry": "Pakistan","rank": 90,"parentMountain": "Skil Brum","location": {"lon": 76.36111,"lat": 35.82778},"heightFeet": 23871,"FirstAscentDate": "1955-12-31T14:00:00.000Z","mountainMainName": "Muztagh Tower","firstAscentYear": 1956}
,
{"mountainCountries":["India"],"prominenceMetres": 732,"Range": "Garhwal Himalaya","heightMetres": 7272,"mountainName":["Mana Peak"],"mountainMainCountry": "India","rank": 91,"parentMountain": "Kamet","location": {"lon": 79.61528,"lat": 30.88056},"heightFeet": 23858,"FirstAscentDate": "1936-12-31T14:00:00.000Z","mountainMainName": "Mana Peak","firstAscentYear": 1937}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 488,"Range": "Dhaulagiri Himalaya","heightMetres": 7268,"mountainName":["Dhaulagiri VI"],"mountainMainCountry": "Nepal","rank": 91,"parentMountain": "Dhaulagiri IV","location": {"lon": 83.27417,"lat": 28.70861},"heightFeet": 23845,"FirstAscentDate": "1969-12-31T14:00:00.000Z","mountainMainName": "Dhaulagiri VI","firstAscentYear": 1970}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 1329,"Range": "Rakaposhi-Haramosh Karakoram","heightMetres": 7266,"mountainName":["Diran"],"mountainMainCountry": "Pakistan","rank": 92,"parentMountain": "Malubiting","location": {"lon": 74.66167,"lat": 36.12028},"heightFeet": 23839,"FirstAscentDate": "1967-12-31T14:00:00.000Z","mountainMainName": "Diran","firstAscentYear": 1968}
,
{"mountainCountries":["China"],"prominenceMetres": 570,"Range": "Labuche Himalaya","heightMetres": 7250,"mountainName":["Labuche Kang III","East[13]"],"mountainMainCountry": "China","rank": 93,"parentMountain": "Labuche Kang","location": {"lon": 86.38389,"lat": 28.30139},"heightFeet": 23786,"mountainMainName": "Labuche Kang III","firstAscentYear": null}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 1151,"Range": "Dhaulagiri Himalaya","heightMetres": 7246,"mountainName":["Putha Hiunchuli"],"mountainMainCountry": "Nepal","rank": 94,"parentMountain": "Churen Himal","location": {"lon": 83.14611,"lat": 28.74778},"heightFeet": 23773,"FirstAscentDate": "1953-12-31T14:00:00.000Z","mountainMainName": "Putha Hiunchuli","firstAscentYear": 1954}
,
{"mountainCountries":["India","China"],"prominenceMetres": 607,"Range": "Siachen Karakoram","heightMetres": 7245,"mountainName":["Apsarasas Kangri"],"mountainMainCountry": "India","rank": 95,"parentMountain": "Teram Kangri I","location": {"lon": 77.14861,"lat": 35.53861},"heightFeet": 23770,"FirstAscentDate": "1975-12-31T13:00:00.000Z","mountainMainName": "Apsarasas Kangri","firstAscentYear": 1976}
,
{"mountainCountries":["India","China"],"prominenceMetres": 683,"Range": "Garhwal Himalaya","heightMetres": 7242,"mountainName":["Mukut Parbat"],"mountainMainCountry": "India","rank": 96,"parentMountain": "Kamet","location": {"lon": 79.57,"lat": 30.94917},"heightFeet": 23760,"FirstAscentDate": "1950-12-31T14:00:00.000Z","mountainMainName": "Mukut Parbat","firstAscentYear": 1951}
,
{"mountainCountries":["India"],"prominenceMetres": 613,"Range": "Rimo Karakoram","heightMetres": 7233,"mountainName":["Rimo III"],"mountainMainCountry": "India","rank": 97,"parentMountain": "Rimo I","location": {"lon": 77.36167,"lat": 35.37528},"heightFeet": 23730,"FirstAscentDate": "1984-12-31T13:00:00.000Z","mountainMainName": "Rimo III","firstAscentYear": 1985}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 1534,"Range": "Langtang Himalaya","heightMetres": 7227,"mountainName":["Langtang Lirung"],"mountainMainCountry": "Nepal","rank": 98,"parentMountain": "Shisha Pangma","location": {"lon": 85.51694,"lat": 28.25611},"heightFeet": 23711,"FirstAscentDate": "1977-12-31T13:00:00.000Z","mountainMainName": "Langtang Lirung","firstAscentYear": 1978}
,
{"mountainCountries":["China"],"prominenceMetres": 895,"Range": "Kula Kangri Himalaya","heightMetres": 7221,"mountainName":["Karjiang"],"mountainMainCountry": "China","rank": 99,"parentMountain": "Kula Kangri","location": {"lon": 90.64694,"lat": 28.2575},"heightFeet": 23691,"mountainMainName": "Karjiang","firstAscentYear": null}
,
{"mountainCountries":["Nepal"],"prominenceMetres": 769,"Range": "Annapurna Himalaya","heightMetres": 7219,"mountainName":["Annapurna Dakshin"],"mountainMainCountry": "Nepal","rank": 100,"parentMountain": "Annapurna","location": {"lon": 83.80611,"lat": 28.51833},"heightFeet": 23684,"FirstAscentDate": "1963-12-31T14:00:00.000Z","mountainMainName": "Annapurna Dakshin","firstAscentYear": 1964}
,
{"mountainCountries":["China"],"prominenceMetres": 712,"Range": "Mahalangur Himalaya","heightMetres": 7213,"mountainName":["Khartaphu"],"mountainMainCountry": "China","rank": 101,"parentMountain": "Mount Everest","location": {"lon": 86.9775,"lat": 28.06361},"heightFeet": 23665,"FirstAscentDate": "1934-12-31T14:00:00.000Z","mountainMainName": "Khartaphu","firstAscentYear": 1935}
,
{"mountainCountries":["Bhutan","China"],"prominenceMetres": 1757,"Range": "Lunana Himalaya","heightMetres": 7207,"mountainName":["Tongshanjiabu"],"mountainMainCountry": "Bhutan","rank": 102,"parentMountain": "Gangkar Puensum","location": {"lon": 89.9575,"lat": 28.18667},"heightFeet": 23645,"mountainMainName": "Tongshanjiabu","firstAscentYear": null}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 507,"Range": "Hispar Karakoram","heightMetres": 7207,"mountainName":["Malangutti Sar"],"mountainMainCountry": "Pakistan","rank": 103,"parentMountain": "Distaghil Sar","location": {"lon": 75.14917,"lat": 36.36306},"heightFeet": 23645,"FirstAscentDate": "1984-12-31T13:00:00.000Z","mountainMainName": "Malangutti Sar","firstAscentYear": 1985}
,
{"mountainCountries":["China"],"prominenceMetres": 2160,"Range": "Nagarze Himalaya","heightMetres": 7206,"mountainName":["Noijin Kangsang","Norin Kang"],"mountainMainCountry": "China","rank": 104,"parentMountain": "Gangkar Puensum","location": {"lon": 90.17833,"lat": 28.94667},"heightFeet": 23642,"FirstAscentDate": "1985-12-31T13:00:00.000Z","mountainMainName": "Noijin Kangsang","firstAscentYear": 1986}
,
{"mountainCountries":["Nepal","China"],"prominenceMetres": 665,"Range": "Langtang Himalaya","heightMetres": 7205,"mountainName":["Langtang Ri"],"mountainMainCountry": "Nepal","rank": 105,"parentMountain": "Shisha Pangma","location": {"lon": 85.68361,"lat": 28.38139},"heightFeet": 23638,"FirstAscentDate": "1980-12-31T13:00:00.000Z","mountainMainName": "Langtang Ri","firstAscentYear": 1981}
,
{"mountainCountries":["Bhutan","China"],"prominenceMetres": 1244,"Range": "Lunana Himalaya","heightMetres": 7204,"mountainName":["Kangphu Kang"],"mountainMainCountry": "Bhutan","rank": 106,"parentMountain": "Tongshanjiabu","location": {"lon": 90.06333,"lat": 28.15556},"heightFeet": 23635,"FirstAscentDate": "2001-12-31T13:00:00.000Z","mountainMainName": "Kangphu Kang","firstAscentYear": 2002}
,
{"mountainCountries":["India","China"],"prominenceMetres": 730,"Range": "Siachen Karakoram","heightMetres": 7202,"mountainName":["Singhi Kangri"],"mountainMainCountry": "India","rank": 107,"parentMountain": "Teram Kangri III","location": {"lon": 76.98361,"lat": 35.59972},"heightFeet": 23629,"FirstAscentDate": "1975-12-31T13:00:00.000Z","mountainMainName": "Singhi Kangri","firstAscentYear": 1976}
,
{"mountainCountries":["Pakistan"],"prominenceMetres": 730,"Range": "Hispar Karakoram","heightMetres": 7200,"mountainName":["Lupghar Sar"],"mountainMainCountry": "Pakistan","rank": 108,"parentMountain": "Momhil Sar","location": {"lon": 75.03694,"lat": 36.35028},"heightFeet": 23622,"FirstAscentDate": "1978-12-31T13:00:00.000Z","mountainMainName": "Lupghar Sar","firstAscentYear": 1979} ]