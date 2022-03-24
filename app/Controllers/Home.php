<?php

namespace App\Controllers;

use \Core\View;
use \Core\Redirect;
use \Core\Flash;

/**
 * Home controller
 * 
 * @author Ken Johnson <kenjohnson1994@gmail.com>
 */
class Home extends \Core\Controller {

    /**
     * Show the index page
     *
     * @return void
     */
    public function indexAction() {
        View::renderTemplate('Home/index.html');
    }

 
}
