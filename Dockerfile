# Utilisation d'une image de base avec PHP 8.1
FROM php:8.1-fpm

# Installation des extensions PHP nécessaires
RUN apt-get update && \
    apt-get install -y libzip-dev zip && \
    docker-php-ext-configure zip && \
    docker-php-ext-install zip pdo pdo_mysql

# Installation de Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Répertoire de travail dans le conteneur
WORKDIR /var/www/html

# Copie des fichiers du projet dans le conteneur
COPY . /var/www/html

# Installation des dépendances
RUN composer install

# Exposition du port
EXPOSE 9000

# Commande de démarrage
CMD ["php-fpm"]
