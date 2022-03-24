<?php

namespace Core;

use PDO;
use App\Config;

/**
 * Base model
 * 
 * @author Ken Johnson <kenjohnson1994@gmail.com>
 */
abstract class Model {


    /**
     * Generates a random string of characters
     * 
     * @param int $strength
     * 
     * @return string
     */
    protected static function generate_string(int $strength = 16) {

        $input = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $input_length = strlen($input);
        $random_string = '';
        for($i = 0; $i < $strength; $i++) {
            $random_character = $input[mt_rand(0, $input_length - 1)];
            $random_string .= $random_character;
        }

        return $random_string;
    }
}
