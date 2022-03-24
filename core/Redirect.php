<?php

namespace Core;

/**
 * Redirect handler
 *
 * @author Ken Johnson <kenjohnson1994@gmail.com>
 */
class Redirect {

    /**
     * Redirects to a specific path.
     * 
     * @param string $location [optional]
     * 
     * @return void
     */
    public static function to($location = "") {

        if ($location) {
            
            header("Location: " . $location);
            exit();
        }
    }

}