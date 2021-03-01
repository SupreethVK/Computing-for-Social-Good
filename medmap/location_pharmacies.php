<?php

$host    = 'localhost:3306';
$user    = 'root';
$pass    = '';
$db      = 'medmap';
$charset = 'utf8';

// $host    = '68.66.216.5:3306';
// $db      = 'auratraa_coronamap';
// $user    = 'auratraa_jaya';
// $pass    = 'Thevincicode101';
// $charset = 'utf8';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$opt = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
        ];


$dbh = new PDO($dsn, $user, $pass, $opt);

$sql  = $dbh->query("SELECT * FROM pharmacies");
$rows = array();
while ($row = $sql->fetchall()) {
    $rows[] = $row;
}
echo json_encode($rows, JSON_UNESCAPED_UNICODE);


?>
