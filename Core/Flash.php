<?php

namespace Core;

/**
 * Flash message handler
 * 
 * @author Ken Johnson <kenjohnson1994@gmail.com>
 */
class Flash {

    const DEFAULT = 1;
    const INFO = 2;
    const SUCCESS = 3;
    const ERROR = 4;

    /**
     * Sets the type of Flash
     * 
     * @param const $type 
     * 
     * @return this
     */
    public function setType($type) {

        $this->type = $type;
        Session::put('flashtype', $type);

        return $this;
    }

    /**
     * Sets the flash message
     * 
     * @param string $message
     * 
     * @return void
     */
    public function setMessage(string $message) {

        $this->message = $message;
        Session::put('flashmessage', $message);
    }

    /**
     * Gets the flash message and removes it from session
     * 
     * @param array $args
     * 
     * @return array
     */
    public static function toArray($args) {

        if (Session::exists('flashmessage')) {

            // Add message to array
            $args['flashmessage'] = Session::get('flashmessage');
            $args['flashtype'] = Session::get('flashtype');

            Session::delete('flashmessage');
            Session::delete('flashtype');
        }

        return $args;
    }
}