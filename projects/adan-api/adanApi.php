<?php
header('Content-Type:application/json');
$year = date('Y');
$month = date('m');
$latitude = 32.948384;
$longitude = -5.6664149;
if (isset($_GET['year'])) {
    $year = $_GET['year'];
}
if (isset($_GET['month'])) {
    $month = $_GET['month'];
}
if (isset($_GET['latitude'])) {
    $latitude = $_GET['latitude'];
}
if (isset($_GET['longitude'])) {
    $longitude = $_GET['longitude'];
}

$api = "https://api.aladhan.com/v1/calendar/$year/$month?latitude=$latitude&longitude=$longitude&method=21";
$response = file_get_contents($api);
$data = json_decode($response, true);
$data = $data['data'];
$out = [];

foreach ($data as $day) {
    $obj = new stdClass();
    $obj->date = $day['date']['gregorian']['date'];
    $date = DateTime::createFromFormat('d-m-Y', $day['date']['gregorian']['date']);
    $obj->date = $date->format('Y-m-d');
    $hijriDate = DateTime::createFromFormat('d-m-Y', $day['date']['hijri']['date']);
    $obj->hijri = $hijriDate->format('Y-m-d');
    $obj->fajr = explode(" ", $day['timings']['Fajr'])[0];
    $obj->sobeh = explode(" ", $day['timings']['Sunrise'])[0];
    $obj->dhuhr = explode(" ", $day['timings']['Dhuhr'])[0];
    $obj->asr = explode(" ", $day['timings']['Asr'])[0];
    $obj->maghrib = explode(" ", $day['timings']['Maghrib'])[0];
    $obj->isha = explode(" ", $day['timings']['Isha'])[0];
    $out[] = $obj;
}

echo json_encode($out);
?>