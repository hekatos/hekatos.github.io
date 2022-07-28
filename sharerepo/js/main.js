async function main() {
    var urlParams = new URLSearchParams(window.location.search);
    var repo = urlParams.get('repo');
    var pkgman = urlParams.get('pkgman');
    if (repo === null) {
        drawUsage(`Usage: ${window.location.href}?repo=YOUR_REPO_URL\n
        All URL parameters:
        - repo: the repo you want to add
        - pkgman (optional): the package manager to add to (sileo, zebra, cydia, installer, saily)`);
    }
    else if (isRepositoryDefault(repo)) {
        drawUsage(`Cannot add default repo: ${repo}`);
    }
    else {
        drawPage(repo, pkgman);
    }
}


// Repository-related functions {{{
async function isRepositoryPiracy(repo) {
    isPiracy = await fetch(`https://api.canister.me/v1/community/repositories/check?query=${repo}`)
        .then(resp => resp.json())
        .then(data => data.data.status)
    return (isPiracy == "unsafe") ? true : false
}


async function getRepositoryName(repo) {
    return await fetch(`https://api.canister.me/v1/community/repositories/search?query=${repo}`)
    .then(resp => resp.json())
    .then(data => (data.data.length !== 0) ? data.data[0].name : repo);
}


function isRepositoryDefault(repo){
    repo = repo.replace(/\/$/, '');
    var defaultRepos = [
        "apt.bingner.com/",
        "apt.elucubratus.com/",
        "apt.procurs.us/",
        "ftp.sudhip.com/procursus",
        "repo.quiprr.dev/procursus",
        "apt.saurik.com/",
        "apt.oldcurs.us/",
        "repo.chimera.sh/",
        "diatr.us/apt",
        "repo.theodyssey.dev/",
    ];
    var repoURL = new URL(repo);
    return defaultRepos.includes(repoURL.hostname + repoURL.pathname);
}
// }}}


// Website-drawing functions {{{
async function drawUsage(message) {
    usage = document.getElementById("usage-template").content.cloneNode(true);
    usage.querySelector('h1').innerText = message;
    
    usageElem = document.getElementById("usage");
    usageElem.appendChild(usage);
    usageElem.removeAttribute("hidden");
}


async function drawPage(repo, pkgman) {
    var pkgmanDict = {
        "cydia": `https://cydia.saurik.com/api/share#?source=${repo}`,
        "sileo": `sileo://source/${repo}`,
        "zebra": `zbra://${repo}`,
        "installer": `installer://add/${repo}`,
        "saily": `apt-repo://${repo}`
    };
    
    // Build the icon and URL element of the page
    var repoURLElem = document.getElementById("group1-template").content.cloneNode(true);
    repoURLNamePromise = getRepositoryName(repo);
    if (await isRepositoryPiracy(repo)) {
        // If pirate, load warning
        warningIconElem = document.createElement("i");
        warningIconElem.className = "fa fa-exclamation-triangle";
        warningIconElem.setAttribute("aria-hidden", true);
        warningIconElem.setAttribute("style", "text-align: center; color: var(--nord13); font-size:75px; margin-top: 30px; margin-left: auto; margin-right: auto; display: block;");
        repoURLElem.querySelector('#piracy-warning').removeAttribute("hidden");
        repoURLElem.insertBefore(warningIconElem, repoURLElem.querySelector('#repo-url'));

        document.getElementById("repo-btns").remove();
    }
    else {
        // If not pirate, load website
        if (pkgman !== null) {
            window.location.href = pkgmanDict[pkgman.toLowerCase()];
        }

        // Repo icon
        var repoImageElem = new Image();
        repoImageElem.setAttribute("hidden", "");
        repoImageElem.loading = "eager";
        repoImageElem.id = "logo-main";
        repoImageElem.onload = () => {
            image = document.getElementById("logo-main");
            if (image.complete && image.naturalHeight > 0){
                image.removeAttribute("hidden");
                image.className = "icon logo-main";
            }
        }
        repoImageElem.onerror = () => {
            image = document.getElementById("logo-main");
            image.src = "icons/sad-iphone.png"
        }
        repoImageElem.src = `${repo.replace(/\/$/, '')}/CydiaIcon.png`;
        repoURLElem.insertBefore(repoImageElem, repoURLElem.querySelector('#repo-url'));

        // Add to manager buttons
        var repoButtonsElem = document.getElementById("repo-btns-template").content.cloneNode(true);
        for (var key in pkgmanDict) {
            repoButtonsElem.querySelector(`#${key}`).href = pkgmanDict[key];
        }
        document.getElementById("repo-btns").appendChild(repoButtonsElem);
    }
    repoURLElem.querySelector('#repo-url').innerText = await Promise.resolve(repoURLNamePromise);
    document.getElementById("group1").appendChild(repoURLElem);
}
// }}}


main();