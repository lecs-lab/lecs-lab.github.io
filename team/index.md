---
title: People
nav:
  order: 3
  tooltip: About our members
---

# {% include icon.html icon="fa-solid fa-users" %}People

{% include section.html %}

{% include list.html data="members" component="portrait" filters="role: pi" %}

{% include list.html data="members" component="portrait" filters="role: phd" %}

{% include list.html data="members" component="portrait" filters="role: masters" %}

{% include section.html background="images/background.jpg" dark=true %}

