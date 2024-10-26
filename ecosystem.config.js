/* eslint-disable no-undef */
module.exports = {
  apps: [
    {
      name: "pfdc_backend", // Nom de l'application
      script: "src/index.ts", // Point d'entrée de l'application
      instances: 3, // Nombre d'instances à exécuter
      exec_mode: "cluster", // Mode d'exécution en cluster
      max_memory_restart: "8G", // Redémarre si l'utilisation mémoire dépasse 10 Go
      node_args: "--max-old-space-size=10240", // Augmenter la mémoire à 10 Go pour Node.js
      autorestart: true, // Redémarrer automatiquement les instances
      restart_delay: 5000, // Délai avant de redémarrer une instance après une erreur
      listen_timeout: 5000, // Délai d'attente pour écouter les requêtes
      wait_ready: true, // Attendre que l'application soit prête avant de passer au mode de répartition de charge
      watch: true, // Ne pas surveiller les changements de fichiers
    },
  ],
};
