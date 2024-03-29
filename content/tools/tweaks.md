---
title: "Bypass tweaks"
description: The usual tools, there are many of them
date: 2022-01-19T18:56:44+07:00
draft: false
BookToC: true
weight: 1
---
# Tweaks

These tools attempt to circumvent detection methods.

{{< notice warning >}}
Do not attempt to use multiple bypasses at once. It will result in conflicts and apps are very likely to crash if you do.
{{< /notice >}}

> For further support in English, ask for help in the [r/Jailbreak Discord server](https://discord.gg/jb).

## A-Bypass

> Available from [MERONA Repo](https://bypass.beerpsi.me/sharerepo/?repo=https://repo.co.kr).

> Tweak name in [Choicy](/tools/non-bypasses?id=choicy) or [libhooker-configurator](/tools/non-bypasses?id=libhooker-configurator): `!ABypass2`
1. Launch Settings
2. Scroll down and select A-Bypass
3. Enable the tweak
4. Press `Check For Updates`
5. Scroll down and toggle the switch beside the app(s) to bypass.

> Relating to the above note: A-Bypass will notfy you if you have another bypass enabled, or if A-Bypass cannot inject itself into the app you enabled and launched.

{{< notice tip >}}
If the list of apps doesn't display, respring. If not, reinstall RocketBootstrap and AppList.
{{< /notice >}}
## Hestia

> Available from [Havoc](https://bypass.beerpsi.me/sharerepo/?repo=https://havoc.app).

> Tweak name in [Choicy](/tools/non-bypasses?id=choicy) or [libhooker-configurator](/tools/non-bypasses?id=libhooker-configurator) should contain `HEST`.
1. Launch Settings
2. Scroll down and select Hestia
3. Under `Enabled Applications` toggle the app(s) with jailbreak detection.

{{< notice tip >}}
Some applications may require you to enable extra patches, please try them if the defaults do not work. Also note that Hestia can cause apps to crash. Try using `Compatibility Mode` or disable some patches if they do.
{{< /notice >}}

## Liberty Lite (Beta)
{{< notice warning >}}
Liberty Lite (Beta) seems to be broken. After enabling it for most apps, it causes the app to crash.  
{{< /notice >}}

> Available from [Ryley Angus' repo](https://bypass.beerpsi.me/sharerepo/?repo=https://ryleyangus.com/repo)

> Tweak name in [Choicy](/tools/non-bypasses?id=choicy) or [libhooker-configurator](/tools/non-bypasses?id=libhooker-configurator): `zzzzzLiberty`
1. Launch Settings
2. Scroll down and select Liberty Lite (Beta)
3. Toggle `Enable Liberty`
4. Tap on `Block Jailbreak Detection`
5. Enable the app(s) with jailbreak detecion.

## iHide

> Available from [Kc57's Repo.](https://bypass.beerpsi.me/sharerepo/?repo=https://repo.kc57.com/)

iHide is very similar to Liberty Lite, but it may have varying results depending on the app. The steps are essentially the same as Liberty's.

## Shadow

> Available from [jjolano's repo](https://bypass.beerpsi.me/sharerepo/?repo=https://ios.jjolano.me)

> Tweak name in [Choicy](/tools/non-bypasses?id=choicy) or [libhooker-configurator](/tools/non-bypasses?id=libhooker-configurator): `0Shadow`

> HideJB is a fork of jjolano's Shadow, which is why it doesn't have its own entry.

Preferences for Shadow are a somewhat more complex compared to other bypass tweaks. Some applications may require advanced configuration for them to function. The recommended settings are listed below.
1. Launch Settings
2. Scroll down and select Shadow
3. Make sure `Enable Shadow` is toggled on.
4. Make sure `Bypass Detection Libraries` is also enabled
5. Set `Application Settings` to whitelist and Tap on `Applications`
6. Enable the app with jailbreak detection.
7. Toggle `Automatically Generate` and tap `Generate File Map`, then tap `Continue`.

{{< notice tip >}}
If these settings do not bypass detection, try enabling `Lockdown Mode` for the app you're attempting to bypass.
{{< /notice >}}

## FlyJB & FlyJB X

> These bypasses were developed by XsF1re, but he has taken down his repo and they are no longer maintained. We recommend you use [A-Bypass](#A-Bypass) or another kernel level bypass.
