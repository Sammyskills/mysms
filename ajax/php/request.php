<?php 

// Require the faker lib
require_once('../faker/autoload.php');

// Faker
$faker = Faker\Factory::create('en_NG');

// tokenize lastname (the initial)
$initial = substr($faker->lastname, 0, 1);

// The output format
// "Mr Samuel A. recently purchased iSMS for a school in Lagos." --- for male
// "Ms Prisca A. recently purchased iSMS for a school in Imo." --- for female
// Output Array
$output = array(
    array(
        'title'=> $faker->titleFemale,
        'firstname'=> $faker->firstNameFemale,
    ), // female
    array(
        'title'=> $faker->titleMale,
        'firstname'=> $faker->firstNameMale,
    ), // male
);

// Get a random array
$rand_key = array_rand($output, 1);

// The string
$string = $output[$rand_key]['title'] . " " . $output[$rand_key]['firstname'] . " $initial. recently purchased <strong>iSMS</strong> for a school in <strong>$faker->region</strong>.";

echo $string;