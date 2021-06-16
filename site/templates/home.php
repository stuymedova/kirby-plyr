<!DOCTYPE html>
<html lang='en'>

<head>
  <meta http-equiv='Content-Type' content='text/html; charset=UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title><?= $site->title() ?></title>
  <meta name='description' content='<?= $site->title() ?> Demo'/>
  <?= css('assets/css/main.css') ?>
</head>

<body>
  <?php if($embed = $page->embed()->toEmbed()): ?>
    <div class='video-wrapper'>
      <div id='player' data-plyr-provider='<?= $embed->providerName()->lower() ?>' data-plyr-embed-id='<?= $embed->url() ?>' data-poster='<?= $embed->image() ?>'></div>
    </div>
  <?php endif ?> 
</body>

<?= js('assets/js/main.js') ?> 
</html>