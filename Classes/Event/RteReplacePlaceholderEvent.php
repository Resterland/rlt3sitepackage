<?php

declare(strict_types=1);

namespace Resterland\Rlt3sitepackage\Event;

final class RteReplacePlaceholderEvent
{
    public function __construct(
        private string $content,
        private readonly string $placeholderKey,
    ) {
    }

    public function getContent(): string
    {
        return $this->content;
    }

    public function setContent(string $content): void
    {
        $this->content = $content;
    }

    public function getPlaceholderKey(): string
    {
        return $this->placeholderKey;
    }
}
