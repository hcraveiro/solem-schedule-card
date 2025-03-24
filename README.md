# Home Assistant Solem Schedule Card

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/release/hcraveiro/Home-Assistant-Solem-Schedule-Card.svg)](https://github.com/hcraveiro/Home-Assistant-Solem-Schedule-Card/releases/)

Configure your schedule on your Solem Watering Bluetooth Controller integration on your Home Assistant.

- [Home Assistant Solem Schedule Card](#home-assistant-solem-schedule-card)
    - [Installation](#installation)
    - [Configuration](#configuration)
    - [FAQ](#faq)

## Installation

This integration can be added as any card through HACS or, if you want, downloading the .js file in main, adding to your www folder and adding on your resources:
```yaml
resources:
  url: /local/solem-schedule-card.js
  type: module
```

When the integration is installed in HACS, you will need to restart Home Assistant so it gets available.

## Configuration

To get your Card working you will need to have your [Solem Bluetooth Watering Controller](https://github.com/hcraveiro/Home-Assistant-Solem-Bluetooth-Watering-Controller) installed with a working config entry for a controller.
For each controller that you want to use, you can have a card, which should be added as a manual card with:
```yaml
type: custom:solem-schedule-card
sensor: sensor.<mac_address>_controller_status
```

The Card will appear on your dashboard and you can/should configure for each month:
* Interval between sprinkles - the number of days between sprinkles
* Scheduled times - any number of schedules for each sprinkle day for this month
* Sprinkle time per station - the number of minutes that it should sprinkle on each station. It's the amount of day for each schedule.

You should save afterwards, making it persisted on your Solem Bluetooth Watering Controller integration.

## FAQ

