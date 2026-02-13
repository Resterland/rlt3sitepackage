<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Resterland TYPO3 CMS Site Package',
    'description' => 'Contains website templates, assets, configuration and custom code for my TYPO3 projects.',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '13.4.0-13.4.99',
        ],
        'conflicts' => [
        ],
        'suggests' => [
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Roland Fuhrer',
    'author_email' => 'webmaster@resterland.org',
    'author_company' => 'ResterLand',
    'version' => '2.2.0',
];
