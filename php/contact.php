<!doctype html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="Velocity - Personal Portfolio Template">
  <meta name="keywords" content="velocity, portfolio, website, template, resume, bootWeb, cv, personal, developer, designer, onepage, clean, modern, graphic, web">
  <meta name="author" content="Mehul Prajapati">
  <meta name="apple-mobile-web-app-capable" content="yes">
    <!--
    ========================================================================
     EXCLUSIVE ON themeforest.net
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     Template Name   : Velocity - Personal Portfolio Template
     Version         : 2.0
     Author          : bootWeb
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
     Copyright (c) 2017 - bootWeb - https://themeforest.net/user/bootweb

    ========================================================================
    -->
    <title>Velocity - Personal Portfolio Template</title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="../images/favicon.png" type="image/png">
    <link rel="apple-touch-icon-precomposed" href="../images/favicon.png">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700%7CMontserrat:500,700" rel="stylesheet">
    <!-- Bootstrap -->
    <link rel="stylesheet" href="../vendor/bootstrap/css/bootstrap.min.css">
    <!-- Theme CSS -->
    <link id="pagestyle" rel="stylesheet" type="text/css" href="../css/style.css">
    <link rel="stylesheet" type="text/css" href="../css/responsive.css">

</head>

<body>
  <!-- ========== NavBar ========== -->
  <nav id="nav" class="navbar custom-navbar navbar-fixed-top scroll">
    <div class="container">
     <!-- NAVBAR HEADER -->
     <div class="navbar-header">
      <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
       <span class="icon icon-bar"></span>
       <span class="icon icon-bar"></span>
       <span class="icon icon-bar"></span>
     </button>
     <!-- lOGO TEXT HERE -->
     <a href="../index.html" class="navbar-brand">Velo<span class="contrast">city</span></a>
   </div>
   <!-- NAVIGATION LINKS -->
   <div class="collapse navbar-collapse">
    <ul class="nav navbar-nav navbar-right">
     <li><a href="../index.html#home">Home</a></li>
     <li><a href="../index.html#about">About</a></li>
     <li><a href="../index.html#service">Service</a></li>
     <li><a href="../index.html#portfolio">Portfolio</a></li>
     <li><a href="../index.html#blog">Blog</a></li>
     <li><a href="../index.html#contact" class="active">Contact</a></li>
   </ul>
 </div>
</div>
</nav>
<!-- ========== End Of NavBar ========== -->

<div class="container contact-content">

  <?php
//configure
  $from = $_POST["name"];
  $entered_email = $_POST["email"];
  $entered_subject = $_POST["subject"];
  $entered_message = $_POST["message"];
$sendTo = 'blaker.blaker4@gmail.com';  //put your email address here
$subject = 'New message from Portfolio Contact Form';
$fields = array('name' => 'Name', 'email' => 'Email', 'subject' => 'Subject', 'message' => 'Message');
$okMessage = 'I got your message, thanks for contacting. Will get back soon.';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// let's do the sending
try
{
  $emailText = "";

  foreach ($_POST as $key => $value) {

    if (isset($fields[$key])) {
      $emailText .= "$fields[$key]: $value\n";
    }
  }

  mail($sendTo, $subject, $emailText, "From: " . $from);

  echo "Hi, <strong>$from!</strong> $okMessage <br>";
  ?>
  <br><p class="contact-content-p">Entered information: <br></p>
  <?php
  echo "<strong>Name</strong>: $from <br>
        <strong>Email</strong>: $entered_email <br>
        <strong>Subject</strong>: $entered_subject <br>
        <strong>Message</strong>: $entered_message <br>";
}
catch (\Exception $e)
{
  echo "$errorMessage";
}
?>
</div>

<!-- jQuery -->
<script src="../vendor/jquery/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>