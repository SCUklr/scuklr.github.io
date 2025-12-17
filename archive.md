---
layout: page
title: 归档
permalink: /archive/
---

## 文章归档

{% for post in site.posts %}
  {% assign current_year = post.date | date: "%Y" %}
  {% if post.next %}
    {% assign next_year = post.next.date | date: "%Y" %}
  {% else %}
    {% assign next_year = "" %}
  {% endif %}
  
  {% if forloop.first or current_year != next_year %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h3>{{ current_year }}</h3>
    <ul class="archive-list">
  {% endif %}
  
  <li>
    <span class="archive-date">{{ post.date | date: "%m月%d日" }}</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
  
  {% if forloop.last %}
    </ul>
  {% endif %}
{% endfor %}
