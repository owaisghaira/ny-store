 let cityData = [
    { value: 1024, Title: "KARACHI" },
    { value: 1025, Title: "LAHORE" },
    { value: 1046, Title: "HYDERABAD" },
    { value: 1031, Title: "QUETTA" },
    { value: 1027, Title: "PESHAWAR" },
    { value: 1026, Title: "ISLAMABAD" },
    { value: 1038, Title: "RAWALPINDI" },
    { value: 1039, Title: "MULTAN" },
    { value: 1028, Title: "FAISALABAD" },
    { value: 1047, Title: "SUKKUR" },
    { value: 1136, Title: "18 HAZARI" },
    { value: 1033, Title: "ABBOTTABAD" },
    { value: 1137, Title: "ABDUL HAKIM" },
    { value: 1138, Title: "ADDA BUN BOSAN" },
    { value: 1139, Title: "ADDA LAR" },
    { value: 1140, Title: "ADDA ZAKHEERA" },
    { value: 1141, Title: "AHMED PUR EAST" },
    { value: 1142, Title: "AHMED PUR LAMMA" },
    { value: 1143, Title: "AHMED PUR SIAL" },
    { value: 1484, Title: "AL AIN" },
    { value: 1145, Title: "ALI PUR CHATTA" },
    { value: 1211, Title: "ALIPUR" },
    { value: 1147, Title: "AMINPUR BANGLOW" },
    { value: 1148, Title: "ARIFWALA" },
    { value: 1150, Title: "ATTOCK" },
    { value: 1151, Title: "AWARAN" },
    { value: 1152, Title: "BADIN" },
    { value: 1057, Title: "BAGH" },
    { value: 1212, Title: "BAHAWALNAGAR" },
    { value: 1042, Title: "BAHAWALPUR" },
    { value: 1153, Title: "BAJWAR" },
    { value: 1535, Title: "BALKASAR" },
    { value: 1213, Title: "BANGLOW GOGERA" },
    { value: 1214, Title: "BANNU" },
    { value: 1215, Title: "BARA KAHU" },
    { value: 1155, Title: "BARKHAN" },
    { value: 1156, Title: "BARNALA" },
    { value: 1157, Title: "BASIR PUR" },
    { value: 1491, Title: "BASTI SHOREKOT" },
    { value: 1158, Title: "BATKHELA" },
    { value: 1159, Title: "BATTGRAM" },
    { value: 1160, Title: "BELA" },
    { value: 1161, Title: "BHAI PHARU" },
    { value: 1162, Title: "BHAKKAR" },
    { value: 1163, Title: "BHALWAL" },
    { value: 1164, Title: "BHAWANA" },
    { value: 1165, Title: "BHERA" },
    { value: 1492, Title: "BHIKKY" },
    { value: 1216, Title: "BHIMBER" },
    { value: 1217, Title: "BHIRIA CITY" },
    { value: 1218, Title: "BHIRIA ROAD" },
    { value: 1169, Title: "BHIT SHAH" },
    { value: 1170, Title: "BUCHIANA MANDI" },
    { value: 1171, Title: "BUDHLA SANT" },
    { value: 1172, Title: "BUNAIR" },
    { value: 1173, Title: "BUREWALA" },
    { value: 1174, Title: "CHACHRO" },
    { value: 1175, Title: "CHAK JHUMRA" },
    { value: 1176, Title: "CHAK SAWARI" },
    { value: 1075, Title: "CHAKWAL" },
    { value: 1177, Title: "CHAMAN" },
    { value: 1036, Title: "CHARSADDA" },
    { value: 1219, Title: "CHASHMA" },
    { value: 1178, Title: "CHAWINDA" },
    { value: 1179, Title: "CHENAB NAGAR" },
    { value: 1076, Title: "CHICHAWATNI" },
    { value: 1181, Title: "CHINIOT" },
    { value: 1220, Title: "CHISHTIAN" },
    { value: 1183, Title: "CHITRAL" },
    { value: 1184, Title: "CHOA SYDEN SHAH" },
    { value: 1185, Title: "CHOR CANTT" },
    { value: 1186, Title: "CHOWK AZAM" },
    { value: 1221, Title: "CHOWK SARWER SHAHEED" },
    { value: 1188, Title: "CHUNIAN" },
    { value: 134, Title: "DADU" },
    { value: 1485, Title: "DADYAL (A.k)" },
    { value: 1222, Title: "DAHARKI" },
    { value: 1189, Title: "DAHRANWALA" },
    { value: 1190, Title: "DAKOTA" },
    { value: 1191, Title: "DALBANDIN" },
    { value: 1192, Title: "DARA ADM KHEL" },
    { value: 1193, Title: "DARGAI" },
    { value: 1194, Title: "DARY KHAN" },
    { value: 1195, Title: "DASKA" },
    { value: 1196, Title: "DAUD KHEL" },
    { value: 1197, Title: "DAULATPUR" },
    { value: 1198, Title: "DEPAL PUR" },
    { value: 1199, Title: "DERA ALLAHYAR" },
    { value: 1078, Title: "DERA GHAZI KHAN" },
    { value: 1035, Title: "DERA ISMAIL KHAN" },
    { value: 1200, Title: "DERAMURAD JAMAL" },
    { value: 1201, Title: "DHANOT" },
    { value: 1202, Title: "DHODHAK" },
    { value: 1203, Title: "DIGRI" },
    { value: 1204, Title: "DIJKOT" },
    { value: 1080, Title: "DINA" },
    { value: 1205, Title: "DINGA" },
    { value: 1557, Title: "DIR" },
    { value: 1206, Title: "DOKRI" },
    { value: 1207, Title: "DOLAT NAGAR" },
    { value: 1493, Title: "DONGA BONGA" },
    { value: 1208, Title: "DOUR" },
    { value: 1209, Title: "DUKKI" },
    { value: 1210, Title: "DULLE WALA" },
    { value: 1223, Title: "DUNYA PUR" },
    { value: 1224, Title: "ELLAH ABAD" },
    { value: 1533, Title: "FAQIR WALI" },
    { value: 1494, Title: "FAQIRWALI" },
    { value: 1225, Title: "FARROQABAD" },
    { value: 1226, Title: "FATEH JANG" },
    { value: 1227, Title: "FATEHPUR" },
    { value: 1228, Title: "FAZILPUR" },
    { value: 1229, Title: "FEROZ WATOWAN" },
    { value: 1230, Title: "FEROZA" },
    { value: 1545, Title: "FEROZWALA" },
    { value: 1231, Title: "FORT ABBAS" },
    { value: 1232, Title: "GADOON AMAZAI" },
    { value: 1233, Title: "GAGGO MANDI" },
    { value: 1495, Title: "GAKHAR MANDI" },
    { value: 1081, Title: "GAMBAT" },
    { value: 1234, Title: "GARH MOR" },
    { value: 1235, Title: "GARI KHAIRO" },
    { value: 1236, Title: "GARI YASIN" },
    { value: 1237, Title: "GAWADAR" },
    { value: 1238, Title: "GHAKAR" },
    { value: 1239, Title: "GHARO" },
    { value: 1240, Title: "GHAZI ABAD" },
    { value: 1082, Title: "GHOTKI" },
    { value: 1241, Title: "GHOUS PUR" },
    { value: 1054, Title: "GILGIT" },
    { value: 1083, Title: "GOJRA" },
    { value: 1242, Title: "GOLARCHI" },
    { value: 1243, Title: "GUDDU" },
    { value: 1244, Title: "GUJARKHAN" },
    { value: 1496, Title: "GUJRAN KHAN" },
    { value: 1040, Title: "GUJRANWALA" },
    { value: 1045, Title: "GUJRAT" },
    { value: 1085, Title: "HAFIZABAD" },
    { value: 1245, Title: "HAJIRA" },
    { value: 1246, Title: "HALA" },
    { value: 1247, Title: "HANGU" },
    { value: 1497, Title: "HARAPPA" },
    { value: 1086, Title: "HARIPUR" },
    { value: 1248, Title: "HARNOULI" },
    { value: 1087, Title: "HAROONABAD" },
    { value: 1249, Title: "HASILPUR" },
    { value: 1250, Title: "HASSAN ABDAL" },
    { value: 1251, Title: "HATTER" },
    { value: 1498, Title: "HATTIAN" },
    { value: 1499, Title: "HAVALI LAKHAN" },
    { value: 1252, Title: "HAVELLIAN" },
    { value: 1253, Title: "HAZRO" },
    { value: 1500, Title: "HEAD MARALA" },
    { value: 1254, Title: "HUB" },
    { value: 1543, Title: "HUB CHOWKI" },
    { value: 1255, Title: "HUJRA SHAH MUQEEM" },
    { value: 1256, Title: "HUMAK" },
    { value: 1257, Title: "HUNZA" },
    { value: 1258, Title: "IQBAL NAGAR" },
    { value: 1259, Title: "ISKANDARABAD" },
    { value: 1260, Title: "ISLAMKOT" },
    { value: 1261, Title: "ISSA KHEL" },
    { value: 1262, Title: "JABELALI" },
    { value: 1051, Title: "JACOBABAD" },
    { value: 1501, Title: "JAHANIYA" },
    { value: 1263, Title: "JALAL PUR BHATTIAN" },
    { value: 1264, Title: "JALAL PUR JATTAN" },
    { value: 1266, Title: "JALALPURPIRWALA" },
    { value: 1267, Title: "JAMALDIN WALI" },
    { value: 1268, Title: "JAMPUR" },
    { value: 1090, Title: "JAMSHORO" },
    { value: 1502, Title: "JAND" },
    { value: 1269, Title: "JAND WALA" },
    { value: 1091, Title: "JARANWALA" },
    { value: 1270, Title: "JARWAR" },
    { value: 1503, Title: "JATLAAN" },
    { value: 1271, Title: "JATOI" },
    { value: 1277, Title: "JAUHARABAD" },
    { value: 1272, Title: "JAWARIAN" },
    { value: 1541, Title: "JEHANGIRA" },
    { value: 1093, Title: "JHANG" },
    { value: 1273, Title: "JHANGIRA" },
    { value: 1274, Title: "JHANIAN" },
    { value: 1275, Title: "JHAT PAT" },
    { value: 1276, Title: "JHELUM" },
    { value: 1504, Title: "JIN PUR" },
    { value: 1505, Title: "K. N. SHAH" },
    { value: 1278, Title: "KABIR WALA" },
    { value: 1279, Title: "KACHA KHO" },
    { value: 1280, Title: "KAHOTA" },
    { value: 1281, Title: "KALA BAGH" },
    { value: 1282, Title: "KALA SHAH KAKU" },
    { value: 1095, Title: "KALAR KAHAR" },
    { value: 1283, Title: "KALAT" },
    { value: 1507, Title: "KALLAR SADDIYIAN" },
    { value: 1284, Title: "KALOOR KOT" },
    { value: 1285, Title: "KAMALIA" },
    { value: 1286, Title: "KAMBAR ALI KHAN" },
    { value: 1508, Title: "KAMEER" },
    { value: 1287, Title: "KAMER MOSHANI" },
    { value: 1288, Title: "KAMOKE" },
    { value: 1489, Title: "KAMRA" },
    { value: 1289, Title: "KANA NAU" },
    { value: 1097, Title: "KANDH KOT" },
    { value: 1290, Title: "KANDIARI" },
    { value: 1291, Title: "KANDYARO" },
    { value: 1292, Title: "KARAK" },
    { value: 1540, Title: "KARIANWALA" },
    { value: 1293, Title: "KAROR LALESAN" },
    { value: 1294, Title: "KAROR PAKKA" },
    { value: 1099, Title: "KASHMORE" },
    { value: 1295, Title: "KASOWAL" },
    { value: 1296, Title: "KASUR" },
    { value: 1297, Title: "KATLANG" },
    { value: 1298, Title: "KHAIPUR TAMEWAL" },
    { value: 1052, Title: "KHAIRPUR" },
    { value: 1509, Title: "KHAIRPUR MIRS" },
    { value: 1101, Title: "KHAIRPUR NATHAN" },
    { value: 1299, Title: "KHAN BELA" },
    { value: 1103, Title: "KHANEWAL" },
    { value: 1550, Title: "KHANGARH" },
    { value: 1300, Title: "KHANPUR" },
    { value: 1510, Title: "KHANPUR DEM" },
    { value: 1301, Title: "KHANQA SHARIF" },
    { value: 1302, Title: "KHAPLU" },
    { value: 1303, Title: "KHARAN" },
    { value: 1104, Title: "KHARIAN" },
    { value: 1304, Title: "KHARIAN CANTT" },
    { value: 1305, Title: "KHAZAKHELA" },
    { value: 1306, Title: "KHEWRA DANDOT" },
    { value: 1307, Title: "KHIDDER WALA" },
    { value: 1308, Title: "KHIPRO" },
    { value: 1537, Title: "KHURRIAN WALA" },
    { value: 1511, Title: "KHURRIANWALA" },
    { value: 1309, Title: "KHUSHAB" },
    { value: 1059, Title: "KHUZDAR " },
    { value: 1506, Title: "KHYBER" },
    { value: 1034, Title: "KOHAT" },
    { value: 1310, Title: "KOT ABDUL MALIK" },
    { value: 1311, Title: "KOT ADDU" },
    { value: 1312, Title: "KOT CHUTTA" },
    { value: 1313, Title: "KOT GHULAM MUHD" },
    { value: 1314, Title: "KOT MITTHAN" },
    { value: 1315, Title: "KOT MOMIN" },
    { value: 1316, Title: "KOT RADHA KISHA" },
    { value: 1317, Title: "KOT SAMABAH" },
    { value: 1530, Title: "KOTHIALA" },
    { value: 1318, Title: "KOTLA" },
    { value: 1512, Title: "KOTLA ARAB ALI KHAN" },
    { value: 1534, Title: "KOTLA JAM" },
    { value: 1319, Title: "KOTLI-A.KASHMIR" },
    { value: 1513, Title: "KOTLY LOHARANA" },
    { value: 1320, Title: "KOTRI" },
    { value: 1321, Title: "KUNDIAN" },
    { value: 1322, Title: "KUNRI" },
    { value: 1323, Title: "LAKI MARWAT" },
    { value: 1324, Title: "LALAMUSA" },
    { value: 1325, Title: "LALIAN" },
    { value: 1326, Title: "LANDIKOTAL" },
    { value: 1048, Title: "LARKANA" },
    { value: 1544, Title: "LASBELA" },
    { value: 1327, Title: "LAYYAH" },
    { value: 1328, Title: "LIAQUATPUR" },
    { value: 1329, Title: "LODHRAN" },
    { value: 1330, Title: "LORA LAI" },
    { value: 1331, Title: "MACHI GOTH" },
    { value: 1332, Title: "MAILSI" },
    { value: 1333, Title: "MAKHDOOM AALI" },
    { value: 1334, Title: "MALAK WAL" },
    { value: 1335, Title: "MALAKAND" },
    { value: 1336, Title: "MAMUN KANJAN" },
    { value: 1554, Title: "MANAWALA" },
    { value: 324, Title: "MANDI BAHAUDDIN" },
    { value: 1337, Title: "MANDI FAIZ ABAD" },
    { value: 1514, Title: "MANDRA" },
    { value: 1536, Title: "MANDRANWALA" },
    { value: 1338, Title: "MANGA MANDI" },
    { value: 1546, Title: "MANGAT" },
    { value: 1339, Title: "MANGLA" },
    { value: 1542, Title: "MANGLA CANTT" },
    { value: 1548, Title: "MANGLA HAMLET (A.K.)" },
    { value: 1340, Title: "MANGOWAL" },
    { value: 1341, Title: "MANKERA" },
    { value: 1342, Title: "MANSEHRA" },
    { value: 327, Title: "MARDAN" },
    { value: 1343, Title: "MASTUNG" },
    { value: 1109, Title: "MATIARI" },
    { value: 1344, Title: "MATLI" },
    { value: 1345, Title: "MEHAR" },
    { value: 1346, Title: "MEHMOODKOT" },
    { value: 1347, Title: "MEHRAB PUR" },
    { value: 1348, Title: "MIAN CHANOO" },
    { value: 1349, Title: "MIANWALI" },
    { value: 1350, Title: "MINCHANABAD" },
    { value: 1351, Title: "MINGORA (SWAT)" },
    { value: 1352, Title: "MIRPUR AZAD KASHMIR" },
    { value: 1050, Title: "MIRPUR KHAS" },
    { value: 1353, Title: "MIRPUR MATHELO" },
    { value: 1354, Title: "MIRPUR SAKRO" },
    { value: 1355, Title: "MIRWAH GORCHANI" },
    { value: 1356, Title: "MITHI" },
    { value: 1357, Title: "MITYARI" },
    { value: 1547, Title: "MONA DEPOT" },
    { value: 1555, Title: "MORE KHUNDA" },
    { value: 1114, Title: "MORO" },
    { value: 1358, Title: "MUBARAK PUR" },
    { value: 1359, Title: "MUCH" },
    { value: 1360, Title: "MURID WALA" },
    { value: 1361, Title: "MURIDKEY" },
    { value: 1362, Title: "MURREE" },
    { value: 1363, Title: "MUSLIM BAGH" },
    { value: 1115, Title: "MUZAFFAR GARH" },
    { value: 1364, Title: "MUZAFFARABAD " },
    { value: 1365, Title: "NANKANA SAHIB" },
    { value: 1549, Title: "NARANG MANDI" },
    { value: 1366, Title: "NAROWAL" },
    { value: 1367, Title: "NARWALA BANGLA" },
    { value: 1065, Title: "NASIRABAD" },
    { value: 1531, Title: "NATHIA GALI" },
    { value: 1368, Title: "NAUABAD" },
    { value: 1369, Title: "NAUDERO" },
    { value: 1370, Title: "NAUSHERA" },
    { value: 1049, Title: "NAWABSHAH" },
    { value: 1371, Title: "NEW JATOI" },
    { value: 1372, Title: "NEW SAEEDABAD" },
    { value: 1515, Title: "NOORIABAD" },
    { value: 1373, Title: "NOORPUR" },
    { value: 1374, Title: "NOSHERO FEROZ" },
    { value: 1375, Title: "NOSHKI" },
    { value: 1037, Title: "NOWSHERA " },
    { value: 1376, Title: "NOWSHERA VIRKA" },
    { value: 1377, Title: "NURPUR THAL" },
    { value: 1378, Title: "OGHI" },
    { value: 375, Title: "OKARA" },
    { value: 1379, Title: "OKARA CANTT" },
    { value: 1380, Title: "OLE KHI" },
    { value: 1381, Title: "OLE LHE" },
    { value: 1382, Title: "OLE RWP" },
    { value: 1383, Title: "PABBI" },
    { value: 1384, Title: "PAHAR PUR" },
    { value: 1385, Title: "PAINSRA" },
    { value: 1386, Title: "PAK PATTAN SHAR" },
    { value: 1387, Title: "PALANDRI" },
    { value: 1388, Title: "PANJGOOR" },
    { value: 1389, Title: "PANNU AKIL" },
    { value: 1390, Title: "PANU AQIL CANTT" },
    { value: 1391, Title: "PASNI" },
    { value: 1392, Title: "PASROOR" },
    { value: 1393, Title: "PATTOKI" },
    { value: 1394, Title: "PETARO" },
    { value: 1395, Title: "PHALIA" },
    { value: 1396, Title: "PIND DADAN KHAN" },
    { value: 1397, Title: "PINDI BHATIAN" },
    { value: 1398, Title: "PINDI GHEB" },
    { value: 1399, Title: "PIPLAN" },
    { value: 1516, Title: "PIR MAHAL" },
    { value: 1400, Title: "PIRYALO" },
    { value: 1401, Title: "PISHIN" },
    { value: 1402, Title: "QABOOLA" },
    { value: 1403, Title: "QADIRPUR RAWAN" },
    { value: 1404, Title: "QALANDRABAD" },
    { value: 1405, Title: "QAZI AHMED" },
    { value: 1406, Title: "QILA DEDAR SING" },
    { value: 1407, Title: "QUAIDABAD" },
    { value: 1517, Title: "RABWAH" },
    { value: 1408, Title: "RADHAN STATION" },
    { value: 1119, Title: "RAHIM YAR KHAN" },
    { value: 1538, Title: "RAHWALI" },
    { value: 1410, Title: "RAIWAND" },
    { value: 1411, Title: "RAJANA" },
    { value: 1412, Title: "RAJANPUR" },
    { value: 1120, Title: "RANIPUR" },
    { value: 1486, Title: "RAS AL KHAIMAH" },
    { value: 1414, Title: "RATTO DERO" },
    { value: 1415, Title: "RAWALAKOT" },
    { value: 1416, Title: "RAWAT" },
    { value: 1417, Title: "RENALA KHURD" },
    { value: 1418, Title: "RISALPUR" },
    { value: 1122, Title: "ROHRI" },
    { value: 1123, Title: "SADIQABAD" },
    { value: 1124, Title: "SAHIWAL" },
    { value: 1419, Title: "SAHIWAL - FSD" },
    { value: 1420, Title: "SAIDU SHARIF" },
    { value: 1482, Title: "SAKARDU" },
    { value: 1520, Title: "SAKHI SARWAR" },
    { value: 1421, Title: "SAKRAND" },
    { value: 1422, Title: "SAMANDRI" },
    { value: 1423, Title: "SAMARO" },
    { value: 1424, Title: "SAMBRIAL" },
    { value: 1425, Title: "SANAWAN" },
    { value: 1426, Title: "SANGHAR" },
    { value: 1427, Title: "SANGLA HILL" },
    { value: 1521, Title: "SANJARPUR" },
    { value: 1041, Title: "SARGODHA" },
    { value: 1483, Title: "SARWAR SHAHEED" },
    { value: 1429, Title: "SATIANA BANGLA" },
    { value: 1522, Title: "SATIAYANA" },
    { value: 1126, Title: "SEHWAN" },
    { value: 1518, Title: "SEKHAT" },
    { value: 1430, Title: "SERAI NAURANG" },
    { value: 1431, Title: "SHABQADAR" },
    { value: 1551, Title: "SHAH JAMAL" },
    { value: 1432, Title: "SHAHDAD KOT" },
    { value: 1433, Title: "SHAHDADPUR" },
    { value: 1434, Title: "SHAHDARA" },
    { value: 1435, Title: "SHAHKOT" },
    { value: 1523, Title: "SHAHPUR SADDAR" },
    { value: 1436, Title: "SHAKAR GARH" },
    { value: 1437, Title: "SHANGLA" },
    { value: 1438, Title: "SHARAQPUR" },
    { value: 1487, Title: "SHARJAH" },
    { value: 1044, Title: "SHEIKHUPURA" },
    { value: 472, Title: "SHIKARPUR" },
    { value: 1440, Title: "SHINKIARI" },
    { value: 1519, Title: "SHOREKOT CANTT" },
    { value: 1441, Title: "SHORKOT" },
    { value: 1558, Title: "SHORKOT CANTT." },
    { value: 1442, Title: "SHUJAABAD" },
    { value: 1553, Title: "SIAL SHARIF" },
    { value: 1043, Title: "SIALKOT" },
    { value: 1062, Title: "SIBI" },
    { value: 1443, Title: "SILANWALI" },
    { value: 1444, Title: "SINJHORO" },
    { value: 1445, Title: "SITA ROAD" },
    { value: 1524, Title: "SOHAWA" },
    { value: 1446, Title: "SRAI ALAMGEER" },
    { value: 1447, Title: "SUI" },
    { value: 1448, Title: "SUJAWAL" },
    { value: 1556, Title: "SULTAN KOT" },
    { value: 1539, Title: "SULTAN PUR" },
    { value: 1525, Title: "SUMANDARI" },
    { value: 1449, Title: "SUMBRIAL" },
    { value: 1526, Title: "SUNDAR" },
    { value: 1450, Title: "SUNDAR ADDA" },
    { value: 1067, Title: "SWABI" },
    { value: 1030, Title: "SWAT" },
    { value: 1451, Title: "TAKHAT BAI" },
    { value: 1452, Title: "TALAGANG" },
    { value: 1453, Title: "TALL" },
    { value: 1454, Title: "TANDLIANWALA" },
    { value: 1129, Title: "TANDO ADAM" },
    { value: 1455, Title: "TANDO ALLAYAR" },
    { value: 1456, Title: "TANDO BAGHO" },
    { value: 1130, Title: "TANDO JAM" },
    { value: 1457, Title: "TANDO MOHD KHAN" },
    { value: 1458, Title: "TANK" },
    { value: 1459, Title: "TARBELA" },
    { value: 1532, Title: "TARBELA DAM" },
    { value: 1527, Title: "TATLAY WALI" },
    { value: 1460, Title: "TAUNSA SHARIF" },
    { value: 1069, Title: "TAXILA" },
    { value: 1461, Title: "TEMARGARAH" },
    { value: 1462, Title: "TERNOL" },
    { value: 1463, Title: "THARO SHAH" },
    { value: 1053, Title: "THATTA" },
    { value: 1464, Title: "THULL" },
    { value: 1465, Title: "TIBBA SULTAN" },
    { value: 1466, Title: "TOBATEK-SINGH" },
    { value: 1467, Title: "TOPI" },
    { value: 1528, Title: "TRANDA MUHAMMAD PANNAH" },
    { value: 1061, Title: "TURBAT" },
    { value: 1468, Title: "UBARO" },
    { value: 1469, Title: "UCH SHARIF" },
    { value: 1529, Title: "UGOKE" },
    { value: 1470, Title: "UMERKOT" },
    { value: 1488, Title: "UMM AL QUWAIN" },
    { value: 1472, Title: "UPPER DIR" },
    { value: 1473, Title: "USTA MOHAMMAD" },
    { value: 1474, Title: "UTHAL" },
    { value: 1475, Title: "VARI DIR" },
    { value: 1134, Title: "VEHARI" },
    { value: 1476, Title: "WAH" },
    { value: 1559, Title: "WAH CANTT" },
    { value: 1477, Title: "WAN BACHRAN" },
    { value: 1478, Title: "WARAH" },
    { value: 1070, Title: "WAZIRABAD" },
    { value: 1479, Title: "WINDER" },
    { value: 1068, Title: "YAZMAN MANDI" },
    { value: 1480, Title: "ZAFFARWAL" },
    { value: 1481, Title: "ZAHIRPEER" },
    { value: 1064, Title: "ZHOB" },
]

export {cityData}