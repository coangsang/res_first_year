    (function() {
        const WEBSITE_ID = "12271";

        // css
        const style = document.createElement("style");
        style.innerHTML = "#comments {display:none;} .comment-link {visibility: hidden;}";
        document.head.appendChild(style);

        // comments
        const wrap = document.getElementById("comments");
        if (wrap) {
            const script = document.createElement('script');
            script.type = "module";
            script.src = "https://talk.hyvor.com/embed/embed.js";
            document.body.appendChild(script);

            const el = document.createElement("hyvor-talk-comments");
            el.setAttribute("website-id", WEBSITE_ID);
            wrap.appendChild(el);
            wrap.style.display = 'block';
        }

        // comment counts
        const posts = document.querySelectorAll(".post");
        let found = false;

        for (let i = 0; i < posts.length; i++) {
            const post = posts[i];
            const link = post.querySelector(".comment-link");
            if (!link)
                continue;

            const el = document.createElement("hyvor-talk-comment-count");
            el.setAttribute("page-id", link.href);
            link.innerHTML = "";
            link.appendChild(el);

            found = true;
        }

        if (found) {
            const style2 = document.createElement("style");
            style2.innerHTML = ".comment-link {visibility: visible!important;}";
            document.head.appendChild(style);

            const script = document.createElement('script');
            script.src = "https://talk.hyvor.com/embed/comment-counts.js";
            document.body.appendChild(script);

            script.onload = function() {
                hyvorTalkCommentCounts.load({
                    "website-id": WEBSITE_ID
                });
            }
        }
    })()
