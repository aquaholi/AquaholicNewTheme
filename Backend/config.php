<?php
declare(strict_types=1);

/*
 * Backend configuration. The admin panel is intentionally isolated in this
 * folder and does not get imported by the Nuxt website.
 */
const AQ_ROOT = __DIR__ . DIRECTORY_SEPARATOR . '..';
const AQ_DATA = AQ_ROOT . DIRECTORY_SEPARATOR . 'data';
const AQ_BACKUPS = __DIR__ . DIRECTORY_SEPARATOR . 'backups';

function aq_admin_password(): string
{
    // Set AQ_ADMIN_PASSWORD in Apache/PHP for production. This local default
    // keeps a fresh XAMPP installation usable; change it before deployment.
    return getenv('AQ_ADMIN_PASSWORD') ?: 'admin';
}

function aq_admin_user(): string
{
    return getenv('AQ_ADMIN_USER') ?: 'admin';
}
