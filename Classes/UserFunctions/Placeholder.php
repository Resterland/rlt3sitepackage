<?php

declare(strict_types=1);

namespace Resterland\Rlt3sitepackage\UserFunctions;

use Psr\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use Resterland\Rlt3sitepackage\Event\RteReplacePlaceholderEvent;
use TYPO3\CMS\Core\Attribute\AsAllowedCallable;

[Autoconfigure(public: true)];
final class Placeholder
{
    public function __construct(
        private readonly EventDispatcherInterface $eventDispatcher,
    ) {
    }

    #[AsAllowedCallable]
    public function replace(string $content): string
    {
        $pattern = '/\{([^}]+)\}/i';
        $result = preg_replace_callback($pattern, function ($matches) {
            $placeholderKey = $matches[1];
            $event = $this->eventDispatcher->dispatch(
                new RteReplacePlaceholderEvent('{' . $placeholderKey . '}', $placeholderKey),
            );
            return $event->getContent();
        }, $content);
        return $result ?? $content;
    }
}
