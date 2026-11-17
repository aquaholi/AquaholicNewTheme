<?php
declare(strict_types=1);

require_once __DIR__ . DIRECTORY_SEPARATOR . 'config.php';

function aq_catalog(): array
{
    return [
        'services' => [
            'file' => 'services.json',
            'label' => 'Service listings',
            'path' => AQ_DATA . DIRECTORY_SEPARATOR . 'services.json',
        ],
        'details' => [
            'services' => [
                'ser-corporate-design' => ['label' => 'Corporate Design', 'file' => AQ_ROOT . '/components/dark/portfolio-standard/corporate-header.vue'],
                'ser-branding' => ['label' => 'Branding', 'file' => AQ_ROOT . '/components/dark/portfolio-outline/ser-branding-potfolio-header.vue'],
                'ser-content-creation' => ['label' => 'Content Creation', 'file' => AQ_ROOT . '/components/dark/portfolio-outline/ser-content-creation-header.vue'],
                'ser-product-packaging' => ['label' => 'Product Packaging', 'file' => AQ_ROOT . '/components/dark/portfolio-outline/ser-product-packaging-header.vue'],
                'ser-annual-reports' => ['label' => 'Annual Reports', 'file' => AQ_ROOT . '/components/dark/portfolio-outline/ser-annual-reports-header.vue'],
                'ser-social-media' => ['label' => 'Social Media', 'file' => AQ_ROOT . '/components/dark/portfolio-sticky/ser-socail-media-header.vue'],
                'ser-web-design' => ['label' => 'Web Design', 'file' => AQ_ROOT . '/components/dark/portfolio-outline/ser-web-design-portfolio-header.vue'],
            ],
            'industries' => [
                'indus-agriculturalNfnb-page' => ['label' => 'Agriculture & FMCG', 'file' => AQ_ROOT . '/components/dark/Industry-wise/AgricultulralNFnB/indus-agriculturalNfnb-header.vue'],
                'indus-BanksNFinancialInstitute-page' => ['label' => 'Banks & Finance', 'file' => AQ_ROOT . '/components/dark/Industry-wise/BanksNFinancialInstitute/indus-BanksNFinancialInstitute-header.vue'],
                'indus-ConglomeratesNHoldingGroups-page' => ['label' => 'Conglomerates', 'file' => AQ_ROOT . '/components/dark/Industry-wise/ConglomeratesNHoldingGroups/indus-ConglomeratesNHoldingGroups-header.vue'],
                'indus-Healthcare-page' => ['label' => 'Healthcare', 'file' => AQ_ROOT . '/components/dark/Industry-wise/Healthcare/indus-Healthcare-header.vue'],
                'indus-HealthNFitness-page' => ['label' => 'Health & Fitness', 'file' => AQ_ROOT . '/components/dark/Industry-wise/HealthNFitness/indus-HealthNFitness-header.vue'],
                'indus-HospitalityNFnB-page' => ['label' => 'Hospitality & F&B', 'file' => AQ_ROOT . '/components/dark/Industry-wise/HospitalityNFnB/indus-HospitalityNFnB-header.vue'],
                'indus-IndustrialNEngineering-page' => ['label' => 'Industrial & Engineering', 'file' => AQ_ROOT . '/components/dark/Industry-wise/IndustrialNEngineering/indus-IndustrialNEngineering-header.vue'],
                'indus-RealEstate-page' => ['label' => 'Real Estate', 'file' => AQ_ROOT . '/components/dark/Industry-wise/RealEstate/indus-RealEstate-header.vue'],
                'indus-TravelNLeisureNDestination-page' => ['label' => 'Travel & Leisure', 'file' => AQ_ROOT . '/components/dark/Industry-wise/TravelNLeisureNDestination/indus-TravelNLeisureNDestination-header.vue'],
            ],
        ],
    ];
}

function aq_project_collections(): array
{
    $collections = [];
    $files = glob(AQ_DATA . DIRECTORY_SEPARATOR . 'portfolios' . DIRECTORY_SEPARATOR . '*.json') ?: [];
    foreach ($files as $file) {
        $key = basename($file, '.json');
        $collections[$key] = [
            'key' => $key,
            'label' => ucwords(str_replace(['-', '_'], ' ', $key)),
            'file' => $file,
        ];
    }
    ksort($collections);
    return $collections;
}

function aq_read_json(string $file): array
{
    if (!is_file($file)) {
        throw new RuntimeException('Data file not found.');
    }
    $raw = file_get_contents($file);
    $value = json_decode($raw === false ? '' : $raw, true);
    if (!is_array($value)) {
        throw new RuntimeException('The data file contains invalid JSON.');
    }
    return $value;
}

function aq_backup(string $file): void
{
    if (!is_dir(AQ_BACKUPS)) {
        mkdir(AQ_BACKUPS, 0775, true);
    }
    $name = basename($file) . '.' . date('Ymd-His') . '.bak';
    copy($file, AQ_BACKUPS . DIRECTORY_SEPARATOR . $name);
}

function aq_write_json(string $file, array $value): void
{
    aq_backup($file);
    $json = json_encode($value, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    if ($json === false || file_put_contents($file, $json . PHP_EOL, LOCK_EX) === false) {
        throw new RuntimeException('Could not save the data file. Check PHP write permissions.');
    }
}

function aq_detail_read(string $file): array
{
    $source = file_get_contents($file);
    if ($source === false) {
        throw new RuntimeException('Detail page source could not be read.');
    }
    preg_match('/<h1\b[^>]*>(.*?)<\/h1>/is', $source, $titleMatch);
    preg_match('/<p\b[^>]*class=["\'][^"\']*\bpt-50\b[^"\']*["\'][^>]*>(.*?)<\/p>/is', $source, $descriptionMatch);
    return [
        'title' => trim(html_entity_decode(strip_tags($titleMatch[1] ?? ''), ENT_QUOTES | ENT_HTML5, 'UTF-8')),
        'description' => trim(html_entity_decode(strip_tags($descriptionMatch[1] ?? ''), ENT_QUOTES | ENT_HTML5, 'UTF-8')),
        'file' => $file,
        'available' => is_file($file),
    ];
}

function aq_detail_write(string $file, string $title, string $description): void
{
    $source = file_get_contents($file);
    if ($source === false) {
        throw new RuntimeException('Detail page source could not be read.');
    }
    $safeTitle = htmlspecialchars(trim($title), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeDescription = htmlspecialchars(trim($description), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $updated = preg_replace('/(<h1\b[^>]*>)(.*?)(<\/h1>)/is', '$1' . $safeTitle . '$3', $source, 1, $titleCount);
    $updated = preg_replace('/(<p\b[^>]*class=["\'][^"\']*\bpt-50\b[^"\']*["\'][^>]*>)(.*?)(<\/p>)/is', '$1' . $safeDescription . '$3', $updated ?? $source, 1, $descriptionCount);
    if (!$titleCount || !$descriptionCount || $updated === null) {
        throw new RuntimeException('This detail page does not use the expected title/description structure.');
    }
    aq_backup($file);
    if (file_put_contents($file, $updated, LOCK_EX) === false) {
        throw new RuntimeException('Could not save the detail page. Check PHP write permissions.');
    }
}

function aq_json_collection(string $key): array
{
    $collections = aq_project_collections();
    if (!isset($collections[$key])) {
        throw new RuntimeException('Unknown project collection.');
    }
    $items = aq_read_json($collections[$key]['file']);
    return ['meta' => $collections[$key], 'items' => $items];
}
