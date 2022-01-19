---
title: "Special workarounds"
description: Some apps just requires really weird stuff to work
date: 2022-01-19T18:56:44+07:00
draft: false
BookToC: true
bookHidden: true
---
# Special workarounds

{{< notice warning >}}
!> This page usually deals with editing files that normally are left untouched. Workarounds may break, so exercise caution.
{{< /notice >}}

{{< notice info >}}
?> For further support in English, ask for help in the [r/Jailbreak Discord server](https://discord.gg/jb).
{{< /notice >}}

## Hang Seng Personal Banking
After downgrading to version 5.0, locate the app's Info.plist (typically `/var/containers/Bundle/Application/<app name>/<app name>.app/Info.plist` if you use Filza), expand the `Root` key and select the (i) button on `CFBundleVersion`. Set the value to `999`, then save and exit the file. ([here's](https://share.beerpsi.me/zq7fuf5b.mp4) a video demonstrating editing Info.plist)

If app still refuses to open, install AntiProfilesRevoke from BigBoss.