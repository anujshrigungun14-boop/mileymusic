declare global {
    type MiLeyProgress<T = object> = {
        stage: string;
    } & T;

    type MiLeyProgressMessage<_T = MiLeyProgress> = {
        message: string;
    };

    type MiLeyProgressListener<T = MiLeyProgress> = (progress: T) => void;
}

export class DownloadProgress implements MiLeyProgress {
    public readonly stage = 'downloading';

    constructor(
        public readonly receivedBytes: number,
        public readonly totalBytes: number | undefined
    ) {}
}

export class SegmentedDownloadProgress extends DownloadProgress {
    public readonly stage = 'downloading';

    constructor(
        public readonly receivedBytes: number,
        public readonly totalBytes: number | undefined,
        public readonly currentSegment: number,
        public readonly totalSegments: number
    ) {
        super(receivedBytes, totalBytes);
    }
}

export class ProgressMessage implements MiLeyProgressMessage {
    constructor(public readonly message: string) {}
}

export class DownloadProgressMessage extends ProgressMessage {
    constructor(message: string) {
        super(message);
    }
}
