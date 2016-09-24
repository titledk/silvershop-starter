<?php

class Page extends SiteTree
{
    private static $db = [];

    private static $has_one = [];
}
class Page_Controller extends ContentController
{
    private static $allowed_actions = [];

    public function init()
    {
        parent::init();
        Requirements::block('framework/thirdparty/jquery/jquery.js');
        Requirements::css('mysite/styles/dist/libs.css');
        Requirements::css('mysite/styles/dist/site.css');
        //live reload server
        if (Director::isDev() && @fsockopen('localhost', 35729, $errno, $errstr, 1)) {
            Requirements::javascript('http://localhost:35729/livereload.js?snipver=1');
        }
        Requirements::javascript('mysite/js/dist/libs.js');
        Requirements::javascript('mysite/js/dist/site.js');
    }
}
