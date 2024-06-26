// src/randomLink.js
export const getRandomLink = () => {
    const links = [
        "https://drive.google.com/file/d/1QOcmy0oA--g7VuX8yfMTQTTeFD93BrF_/view?usp=drive_link",
        "https://drive.google.com/file/d/1XYHXObEEyz7aFy47FO1yvM4Clfr-J5Yo/view?usp=drive_link",
        "https://drive.google.com/file/d/1F25X9g71aknvjtKSLSJb_OnPKI9t271_/view?usp=drive_link",
        "https://drive.google.com/file/d/1cJDPqNxiZpIaVTyOv8TWRlP9KM0LJeFT/view?usp=drive_link",
        "https://drive.google.com/file/d/1ffGzrbSnJLO1FOqvNWqlrOfjZQBfBJS2/view?usp=drive_link",
        "https://drive.google.com/file/d/1X4X-YcTkiHH-QiutLZaHQiKRxy2_9uMC/view?usp=drive_link",
        "https://drive.google.com/file/d/1kWjFHNsUP68hkYhdyOf8EnLrX3JxpiG2/view?usp=drive_link",
        "https://drive.google.com/file/d/16uYTpsWD4KKWGrgLqnniXv20ynKJYGOL/view?usp=drive_link",
        "https://drive.google.com/file/d/13idV_ouDWzpuKXLl-y38j-gWWI1jIY5A/view?usp=drive_link",
        "https://drive.google.com/file/d/1GEIJ9WqpEmbpHTQfRZhtJnEEy1u3_tpP/view?usp=drive_link",
        "https://drive.google.com/file/d/1nuJ-d2GYlX9giHKS4TuymcCcm1wEJ75i/view?usp=drive_link",
        "https://drive.google.com/file/d/1hmfH_SSNkFF728v6tWfe11BdytQFeEcp/view?usp=drive_link",
        "https://drive.google.com/file/d/1w_NPDaCEau16g8UYwM6z9XHyolnHNtWy/view?usp=drive_link",
        "https://drive.google.com/file/d/1NHmZUqWw5ZN3hOdYPKbv8QfwGxXLqAKo/view?usp=drive_link",
        "https://drive.google.com/file/d/1trjSHSM1itV3KrxGRQHI6rKCNBKYzZF2/view?usp=drive_link",
        "https://drive.google.com/file/d/1XnMlVGs1SrA6fa2tbGYJF-2TKy0a6YU6/view?usp=drive_link",
        "https://drive.google.com/file/d/1fiXfDLM8UatiqDy_YIIIBi381iW3dtLU/view?usp=drive_link",
        "https://drive.google.com/file/d/123T1v5D2Ulrk7L0iL2exrow7zUmNau0v/view?usp=drive_link",
        "https://drive.google.com/file/d/1iF560jLX4LGYo8aCMqv7o6curg75xF0B/view?usp=drive_link",
        "https://drive.google.com/file/d/1AjdTGnOU82AHjB7PTXHE-m-z2pItF1_R/view?usp=drive_link",
        "https://drive.google.com/file/d/1vxc8a93cvn4qLM1LPm4n66gpo34ILFP1/view?usp=drive_link",
        "https://drive.google.com/file/d/1uDO6rgnLlexwb-LQqsySLTKDx7nRYXc8/view?usp=drive_link",
        "https://drive.google.com/file/d/1jGpWpyRGpIzXtKnBHZkUU1ELEGKrb_J0/view?usp=drive_link",
        "https://drive.google.com/file/d/1ZXzkyMVX3APR5Ztkh6nuHn-ooteCcLYq/view?usp=drive_link",
        "https://drive.google.com/file/d/1pEQwGe1vya_nKb_OiB1YIk7w2J_QNWNt/view?usp=drive_link",
        "https://drive.google.com/file/d/1XLIThE1m6nSwm68wsmgcWFq85n_GNSy7/view?usp=drive_link",
        "https://drive.google.com/file/d/1TgmGw5xuYpDEQP8ffNgPRyCgAhwe_joj/view?usp=drive_link",
        "https://drive.google.com/file/d/13wBdMGlKCSCiL8oMXgojzJqnNhozwQJz/view?usp=drive_link",
        "https://drive.google.com/file/d/1pWEUFT1dbf2KwmWFYQmaiRdafb8-CBTN/view?usp=drive_link",
        "https://drive.google.com/file/d/164KC1Jr91_CL6recIx8WTHTPjYG1wboW/view?usp=drive_link",
        "https://drive.google.com/file/d/1uT14dnKENtLdatnYcf0rHjD2XzqO1EaT/view?usp=drive_link",
        "https://drive.google.com/file/d/1In3--02QXfER8KYvxAqgN1hsELJUtBQK/view?usp=drive_link",
        "https://drive.google.com/file/d/1naqOm6OP5GARrLavKmsBxd5-SYaV2XlY/view?usp=drive_link",
        "https://drive.google.com/file/d/1G3WkB6wEUj2F7U6ayMxZACGg56ZPz1iP/view?usp=drive_link",
        "https://drive.google.com/file/d/15Sf9Lz7yPgIj2CuzyJrX1eR0xdXz_E-m/view?usp=drive_link",
        "https://drive.google.com/file/d/1ioQibhKNW4QJBFwPRcYCqOuOsNLkhgCn/view?usp=drive_link",
        "https://drive.google.com/file/d/1gXp9qhwC-8lZRbOISrod6VUEHX_xBu0x/view?usp=drive_link",
        "https://drive.google.com/file/d/18wo5sW6hfsaVHo8oCxggEUszmeAZMQkN/view?usp=drive_link",
        "https://drive.google.com/file/d/1-EBvQzDDPfuvh7jeMLSO6EjLyExNLv9E/view?usp=drive_link",
        "https://drive.google.com/file/d/1LIOIeFNWjbBydaVY0JNTMDXroEwO1hxJ/view?usp=drive_link",
        "https://drive.google.com/file/d/1c2QyQETWZHnq8K6o0IsQpSTnr9YXVOce/view?usp=drive_link",
        "https://drive.google.com/file/d/1lkVK6uQeO2SZFDMmTtuHi-E6Doe0pSvB/view?usp=drive_link",
        "https://drive.google.com/file/d/1YXx2w0mnt3IEXDbdR3tNAHiEIJs4U8YO/view?usp=drive_link",
        "https://drive.google.com/file/d/1Qjz5lGr9EU5i269opGv-k9-AiYFraF_2/view?usp=drive_link",
    ];
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
};
