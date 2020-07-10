const __timeout_ = global.setTimeout;

export const sleep = (timeout = 0) => new Promise((resolve) => __timeout_(resolve, timeout));
