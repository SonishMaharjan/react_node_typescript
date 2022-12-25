import logger from "pino";
import dayjs from "dayjs";

/**
 * Initializes logger.
 */
const log = logger({
  base: {
    pid: false,
  },
  timestamp: () => `,"time::"${dayjs().format()}`,
});

export default log;
