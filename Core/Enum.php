<?php

namespace Core;

/**
 * Basic Enum class
 * 
 * @author Ken Johnson <kenjohnson1994@gmail.com>
 */
abstract class Enum {

    private static $constCacheArray = NULL;

    /**
     * Prevent instance
     */
    private function __construct() {

    }

    /**
     * Get constants of enum class
     * @return array
     */
    public static function getConstants() {

        if (self::$constCacheArray == NULL) {

            self::$constCacheArray = [];
        }

        $calledClass = get_called_class();

        if (!array_key_exists($calledClass, self::$constCacheArray)) {

            $reflect = new \ReflectionClass($calledClass);
            self::$constCacheArray[$calledClass] = $reflect->getConstants();
        }

        return self::$constCacheArray[$calledClass];
    }

    /**
     * Checks if name is in enum
     * 
     * @param string $name
     * @param bool $strict
     * 
     * @return bool
     */
    public static function isValidName($name, $strict = false) {

        $constants = self::getConstants();

        if ($strict) {

            return array_key_exists($name, $constants);
        }

        $keys = array_map('strtolower', array_keys($constants));
        return in_array(strtolower($name), $keys);
    }

    /**
     * Checks if value is in enum
     * 
     * @param string $value
     * 
     * @return bool
     */
    public static function isValidValue($value) {

        $values = array_values(self::getConstants());
        return in_array($value, $values, $strict = true);
    }

    /**
     * Gets the value from given name
     * 
     * @param string $name
     * 
     * @return int
     */
    public static function getValue($name) {

        $calledClass = get_called_class();
        $name = strtoupper($name);

        return constant("{$calledClass}::{$name}");
    }
}