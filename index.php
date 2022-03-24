<?php
/**
 * Front controller
 *
 * PHP version 7.0
 */

/**
 * Composer
 */
require dirname(__FILE__) . '/vendor/autoload.php';


/**
 * Error and Exception handling
 */
error_reporting(E_ALL);
set_error_handler('Core\Error::errorHandler');
set_exception_handler('Core\Error::exceptionHandler');

/**
 * Routing
 */
$router = new Core\Router();

// Home
$router->add('', ['controller' => 'Home', 'action' => 'index']);
$router->add('download', ['controller' => 'Home', 'action' => 'download']);
$router->add('performworlddownload', ['controller' => 'Home', 'action' => 'performworlddownload']);
$router->add('performprofiledownload', ['controller' => 'Home', 'action' => 'performprofiledownload']);
// General (All other standard controllers)
$router->add('{controller}/{action}/{id:\w+}');
$router->add('{controller}/{action}');
$router->add('{controller}', ['action' => 'index']);
    
$router->dispatch($_SERVER['QUERY_STRING']);
