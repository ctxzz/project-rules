import { promises as fs } from 'fs';
import path from 'path';
import { glob } from 'glob';

const RULES_DIR = path.join(process.cwd(), 'rules');
const CURSOR_RULES_DIR = path.join(process.cwd(), '.ai', '.cursor', 'rules');
const CLINE_RULES_FILE = path.join(process.cwd(), '.ai', '.clinerules');

// ファイル名の数字プレフィックスでソート（昇順）
function sortByPrefix(files: string[]): string[] {
  return files.sort((a, b) => {
    const aPrefix = parseInt(a.match(/(\d+)_/)?.[1] || '0');
    const bPrefix = parseInt(b.match(/(\d+)_/)?.[1] || '0');
    return aPrefix - bPrefix;
  });
}

async function generateRules() {
  try {
    // 出力ディレクトリの作成
    await fs.mkdir(CURSOR_RULES_DIR, { recursive: true });

    // ルールファイルの収集
    const commonRules: { path: string; content: string }[] = [];
    const specificRules: { path: string; content: string }[] = [];

    // コマンドライン引数の解析
    const args = process.argv.slice(2);
    const langArg = args.find(arg => arg.startsWith('--lang='))?.replace('--lang=', '');
    const projectArg = args.find(arg => arg.startsWith('--project='))?.replace('--project=', '');
    const allArg = args.includes('--all');

    // 共通ルールを追加（ソート済み）
    const commonFiles = await glob('common/*.md', { cwd: RULES_DIR });
    const sortedCommonFiles = sortByPrefix(commonFiles);
    
    for (const file of sortedCommonFiles) {
      const sourcePath = path.join(RULES_DIR, file);
      const targetPath = path.join(CURSOR_RULES_DIR, file.replace('.md', '.mdc'));

      try {
        // ソースファイルを読み込む
        const content = await fs.readFile(sourcePath, 'utf-8');

        // ターゲットディレクトリが存在しない場合は作成
        await fs.mkdir(path.dirname(targetPath), { recursive: true });

        // .mdcファイルとして出力
        await fs.writeFile(targetPath, content);
        console.log(`Generated: ${targetPath}`);

        // 共通ルールの内容を保存
        commonRules.push({
          path: file,
          content
        });
      } catch (error) {
        console.warn(`Warning: Could not process file ${sourcePath}:`, error);
      }
    }

    // 言語固有のルールを追加
    if (allArg || langArg) {
      const langFiles = await glob('language-specific/*.md', { cwd: RULES_DIR });
      const targetLangFiles = langArg
        ? langFiles.filter(file => file.toLowerCase().includes(langArg.toLowerCase()))
        : langFiles;

      for (const file of targetLangFiles) {
        const sourcePath = path.join(RULES_DIR, file);
        const targetPath = path.join(CURSOR_RULES_DIR, file.replace('.md', '.mdc'));

        try {
          const content = await fs.readFile(sourcePath, 'utf-8');
          await fs.mkdir(path.dirname(targetPath), { recursive: true });
          await fs.writeFile(targetPath, content);
          console.log(`Generated: ${targetPath}`);

          specificRules.push({
            path: file,
            content
          });
        } catch (error) {
          console.warn(`Warning: Could not process file ${sourcePath}:`, error);
        }
      }
    }

    // プロジェクト固有のルールを追加
    if (allArg || projectArg) {
      const projectFiles = await glob('project-specific/*.md', { cwd: RULES_DIR });
      const targetProjectFiles = projectArg
        ? projectFiles.filter(file => file.toLowerCase().includes(projectArg.toLowerCase()))
        : projectFiles;

      for (const file of targetProjectFiles) {
        const sourcePath = path.join(RULES_DIR, file);
        const targetPath = path.join(CURSOR_RULES_DIR, file.replace('.md', '.mdc'));

        try {
          const content = await fs.readFile(sourcePath, 'utf-8');
          await fs.mkdir(path.dirname(targetPath), { recursive: true });
          await fs.writeFile(targetPath, content);
          console.log(`Generated: ${targetPath}`);

          specificRules.push({
            path: file,
            content
          });
        } catch (error) {
          console.warn(`Warning: Could not process file ${sourcePath}:`, error);
        }
      }
    }

    // .clinerulesファイルの生成
    // 共通ルールは数字プレフィックスでソート
    const sortedCommonRules = commonRules.sort((a, b) => {
      const aPrefix = parseInt(a.path.match(/(\d+)_/)?.[1] || '0');
      const bPrefix = parseInt(b.path.match(/(\d+)_/)?.[1] || '0');
      return aPrefix - bPrefix;
    });

    // 特定のルールは追加順を維持
    const clineRulesContent = [
      ...sortedCommonRules.map(rule => rule.content),
      ...specificRules.map(rule => rule.content)
    ].join('\n\n');

    await fs.writeFile(CLINE_RULES_FILE, clineRulesContent);
    console.log(`Generated: ${CLINE_RULES_FILE}`);

    // 使用可能な言語とプロジェクトの一覧を表示
    const langFiles = await glob('language-specific/*.md', { cwd: RULES_DIR });
    const projectFiles = await glob('project-specific/*.md', { cwd: RULES_DIR });

    console.log('\nAvailable languages:');
    langFiles.forEach(file => {
      const lang = file.replace('language-specific/', '').replace('.md', '');
      console.log(`  - ${lang}`);
    });
    
    console.log('\nAvailable projects:');
    projectFiles.forEach(file => {
      const project = file.replace('project-specific/', '').replace('.md', '');
      console.log(`  - ${project}`);
    });

    console.log('\nRule generation completed successfully!');
  } catch (error) {
    console.error('Error generating rules:', error);
    process.exit(1);
  }
}

generateRules(); 