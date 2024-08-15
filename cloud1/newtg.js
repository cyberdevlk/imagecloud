        let hasRedirected = false;

        function replaceUrl() {
            if (hasRedirected) return; // Prevent multiple redirects

            let currentUrl = window.location.href;
            const replacements = [
                { from: "https://csnew4.cskinglk.xyz/tnganuwpxppzfymytsqr/202401/", to: "https://csnew4.cskinglk.xyz/tnganuwpxppzfymytsqr/202503/" },
                { from: "https://csnew4.cskinglk.xyz/tnganuwpxppzfymytsqr/202402/", to: "https://csnew4.cskinglk.xyz/tnganuwpxppzfymytsqr/202503/" },
                { from: "https://csnew4.cskinglk.xyz/tnganuwpxppzfymytsqr/202403/", to: "https://csnew4.cskinglk.xyz/tnganuwpxppzfymytsqr/202503/" }
            ];

            replacements.forEach(mapping => {
                if (currentUrl.includes(mapping.from)) {
                    currentUrl = currentUrl.replace(mapping.from, mapping.to);
                    hasRedirected = true; // Set the flag to prevent further redirects
                    window.location.href = `${currentUrl}`;
                }
            });
        }

        function showButtonIfNeeded() {
            const currentUrl = window.location.href;
            const pathsToCheck = [
                "https://csnew4.cskinglk.xyz/tnganuwpxppzfymytsqr/202401/",
                "https://csnew4.cskinglk.xyz/tnganuwpxppzfymytsqr/202402/",
                "https://csnew4.cskinglk.xyz/tnganuwpxppzfymytsqr/202403/"
            ];

            const shouldShowButton = pathsToCheck.some(path => currentUrl.includes(path));

            setTimeout(() => {
                if (shouldShowButton) {
                    document.getElementById('replaceButton').style.display = 'inline-block'; // Show the button after 3 seconds
                }
            }, 3000);
        }
