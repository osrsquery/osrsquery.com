<?php

namespace Core;

/**
 * Session handler
 * 
 * @author Ken Johnson <kenjohnson1994@gmail.com>
 */
class Session {

    /**
     * Deletes the value of a specific key of the session.
     * 
     * @param string $key
     * 
     * @return boolean
     */
    public static function delete($key) {

        if (self::exists($key)) {
            unset($_SESSION[$key]);
            return true;
        }
        return false;
    }

    /**
     * Deletes the session.
     * @return void
     */
    public static function destroy() {

        session_destroy();
        session_start();
    }

    /**
     * Checks if a specific key of a session exists.
     * 
     * @param string $key
     * 
     * @return boolean
     */
    public static function exists($key) {

        return(isset($_SESSION[$key]));
    }

    /*
     * Returns the value of a specific key of the session if it exists.
     * 
     * @param string $key
     * 
     * @return string|nothing
     */
    public static function get($key) {

        if (self::exists($key)) {
            return($_SESSION[$key]);
        }
    }

    /**
     * Starts the session.
     * @return void
     */
    public static function init() {

        // If no session exist, start the session.
        if (session_id() == "") {
            session_start();
        }
    }

    /**
     * Sets a specific value to a specific key of the session.
     * 
     * @param string $key
     * @param string $value
     * 
     * @return string
     */
    public static function put($key, $value) {

        return($_SESSION[$key] = $value);
    }

    /**
     * Gets user related session values and adds them to an array
     * 
     * @param array $args
     * 
     * @return array
     */
    public static function userToArray($args) {

        if (Session::exists('username')) { 

            $args['username'] = Session::get('username');
            $args['usergroup'] = Session::get('usergroup');
            $args['userid'] = Session::get('userid');
        }
        
        return $args;
    }
}