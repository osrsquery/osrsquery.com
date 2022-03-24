<?php

namespace Core;

/**
 * Cookie handler
 * 
 * @author Ken Johnson <kenjohnson1994@gmail.com>
 */
class Cookie {

    /**
     * Deletes the value of a specific key of the COOKIE super-global.
     * 
     * @param string $key
     * 
     * @return void
     */
    public static function delete($key) {
        
        self::put($key, "", time() - 1);
    }

    /**
     * Checks if a specific key of the COOKIE super-global exists.
     * 
     * @param string $key
     * 
     * @return boolean
     */
    public static function exists($key) {

        return(isset($_COOKIE[$key]));
    }

    /**
     * Returns the value of a specific key of the COOKIE super-global.
     * 
     * @param string $key
     * @return string
     * @since 1.0.1
     */
    public static function get($key) {

        return($_COOKIE[$key]);
    }

    /**
     * Sets a specific value to a specific key of the COOKIE super-global.
     * 
     * @param string $key
     * @param string $value
     * @param integer $expiry
     * 
     * @return boolean
     */
    public static function put($key, $value, $expiry) {

        return(setcookie($key, $value, time() + $expiry, "/"));
    }

}