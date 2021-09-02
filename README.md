# Callen Neasmith Portfolio

#### Developed by [Olly Evans](http://ollyevans.com/)

#### Designed by [Callen Neasmith](http://callenneasmith.com/)

## Adding new pages

### Step one

Open the projects panel, <!------- PROJECTS ------->

Copy one of the of these

```html
<li tabindex="1" class="left__project-item left__bedford-pizzeria">
  <div class="left__circle"></div>
  Bedford Pizzeria
</li>
```

Change to the relevant new work eg.

```html
<li tabindex="1" class="left__project-item left__space-cowgirl">
  <div class="left__circle"></div>
  Space Cowgirl
</li>
```

### Step two

Open the page slider panel, <!------- SLIDER PAGES (MOBILE & DESKTOP)------->

Copy one of the preexisting pages

Change all your content over

Change the id and class name to your new project eg.

```html
<div id="mapmoon" class="left__close-slider">
  <div id="mapmoon-close" class="left__slider-header">CLOSE</div>
</div>
```

becomes

```html
<div id="space-cowgirl" class="left__close-slider">
  <div id="space-cowgirl-close" class="left__slider-header">CLOSE</div>
</div>
```

### Finally,

Navigate to main.js

To add functionality to the page a few steps here is vital

Navigate to // DESKTOP SLIDERS

Copy and paste one of the page sliders and rename the project parts to your new project

```javascript
// MAPMOON
// OPENS
$(".left__mapmoon").click(function () {
  $("#mapmoon").animate({ right: 0 });
  //
  $("#bedford-pizzeria").animate({ right: -wi });
  //
});
// CLOSES
$("#mapmoon-close").click(function () {
  $("#mapmoon").animate({ right: -wi });
  //
});
```

becomes

```javascript
// SPACE-COWGIRL
// OPENS
$(".left__space-cowgirl").click(function () {
  $("#space-cowgirl").animate({ right: 0 });
  //
  $("#bedford-pizzeria").animate({ right: -wi });
  $("#mapmoon").animate({ right: -wi });
  //
});
// CLOSES
$("#space-cowgirl-close").click(function () {
  $("#space-cowgirl").animate({ right: -wi });
  //
});
```

You need to add a function to check whether you're new page is 'active' for every page that exists

eg. for the mapmoon page

```javascript
// MAPMOON
// OPENS
$(".left__mapmoon").click(function () {
$("#mapmoon").animate({ right: 0 });
//
$("#bedford-pizzeria").animate({ right: -wi });
$("#space-cowgirl").animate({ right: -wi }); --------- this one here
//
});
// CLOSES
$("#mapmoon-close").click(function () {
$("#mapmoon").animate({ right: -wi });
//
});
```

Copy & paste that line for all your projects

Now for the **mobile** functionality, all we need to do is navigate to // PHONE SLIDERS

Copy and paste one of the pages eg.

```javascript
$(".left__mapmoon").click(function () {
  $("#mapmoon").animate({ right: 0, width: wi });
});
$("#mapmoon-close").click(function () {
  $("#mapmoon").animate({ right: -wi, width: wi });
});
```

and change it to your new project names:

```javascript
$(".left__space-cowgirl").click(function () {
  $("#space-cowgirl").animate({ right: 0, width: wi });
});
$("#space-cowgirl-close").click(function () {
  $("#space-cowgirl").animate({ right: -wi, width: wi });
});
```

and wa la you are done!  
_(feel free to dm me if you have any problems!)_
