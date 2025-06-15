<?php

return [
    'frontend' => [
        'rlt3sitepackage/favicon-head-tags' => [
            'target' => \Resterland\Rlt3sitepackage\Middleware\FaviconHeadTags::class,
            'before' => [
                'typo3/cms-frontend/page-resolver',
            ],
            'after' => [
                'typo3/cms-frontend/site',
            ],
        ],
    ],
];
