<?php

declare(strict_types=1);

namespace Resterland\Rlt3sitepackage\EventListener;

use Resterland\Rlt3sitepackage\Event\RteReplacePlaceholderEvent;
use TYPO3\CMS\Core\Attribute\AsEventListener;


#[AsEventListener(
    identifier: 'rlt3sitepackage/rte-replace-placeholder',
)]

class RteReplacePlaceholderListener
{
    public function __invoke(RteReplacePlaceholderEvent $event): void
    {
        $key = $event->getPlaceholderKey();
        if ($key === 'foo') {
            $event->setContent('My custom content');
        }
    }
}
