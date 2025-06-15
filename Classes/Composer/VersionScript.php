<?php

namespace Resterland\Rlt3sitepackage\Composer;

use Composer\Script\Event as ScriptEvent;
use RuntimeException;

/**
 * VersionScript
 */
class VersionScript
{

    /**
     * @param ScriptEvent $event
     * @throws RuntimeException
     */
    public static function setVersion(ScriptEvent $event)
    {
        // Validate Arguments
        $arguments = $event->getArguments();
        if (count($arguments) === 0) {
            throw new RuntimeException('No arguments provided. Example: composer run-script set-version 1.0.0',
                1496141893);
        }
        if (!preg_match('/\A\d+\.\d+\.\d+\z/', $arguments[0])) {
            throw new RuntimeException('No valid version number provided! Example: composer run-script set-version 1.0.0',
                1496141893);
        }
        $version = $arguments[0];

        $rootFolder = __DIR__ . '/../../';

        // ext_emconf.php
        $file = realpath($rootFolder . 'ext_emconf.php');
        $content = file_get_contents($file);
        $content = preg_replace('/(\'version\' => )\'\d+\.\d+\.\d+/', '$1\'' . $version, $content);
        file_put_contents($file, $content, LOCK_EX);
        echo "- $file was set to version $version" . PHP_EOL;
    }
}
