---
layout: page-wide
title: GallerieGrid
permalink: /gallerie/
---

Ein paar Fotos die mir sehr gut gefallen. Alles Fotos sind CC BY-SA 4.0 lizensiert. Ich lade keine Fotos auf Instagram oder PixelFed mehr hoch, da ich gerne die Kontrolle über meinen Content habe und auch nicht durch meine Fotos Einnahmen für Dritte generieren will.

<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-6@l" uk-grid="parallax: 150; parallax-justify: true; masonry: pack">
    {% for image in site.static_files %}
        {% if image.path contains 'assets/photos' %}
            <div uk-lightbox="animation: fade">
                <a href="{{ site.baseurl }}{{ image.path }}">
                    <img class="lazyload" src="{{ site.baseurl }}{{ image.path }}">
                </a>
            </div>
        {% endif %}
    {% endfor %}
</div>

